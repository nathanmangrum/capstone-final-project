import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterService, MessageService } from 'primeng/api';
import { InputText } from 'primeng/inputtext';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Member } from '../models/member';
import { TastingGroup } from '../models/tasting-group';
import { MemberService } from '../services/member.service';
import { TastingGroupService } from '../services/tasting-group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnDestroy {
  @ViewChild('groupsFilterField') groupsFilterField!: InputText;
  tastingGroups!: Array<TastingGroup>;
  groups$!: Observable<TastingGroup[]>;
  showDetails = false;
  showAddGroup = false;
  showMemberModal = false;
  modalHeader = '';
  memberModalHeader = '';
  isEdit = false;
  isEditMember = false;
  selectedGroupForEdit!: TastingGroup;
  selectedMemberForEdit!: Member;
  addGroupForm!: FormGroup;
  addMemberForm!: FormGroup;
  whiskeyOrganization = ['Scotch', 'Bourbon', 'Rye'];
  ngDestroyed$: Subject<boolean> = new Subject();

  constructor(private readonly router: Router,
              private readonly groupsService: TastingGroupService,
              private readonly messageService: MessageService,
              private readonly changeDetector: ChangeDetectorRef,
              private readonly fb: FormBuilder,
              private readonly memberService: MemberService,
              private readonly filterService: FilterService) { }

  ngOnInit(): void {
    this.groups$ = this.groupsService.getAllTastingGroups();
    console.log(this.groups$);
    this.createAddGroupForm();
    this.createMemberForm();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
  }

  search(event: any) {
    
  }

  addGroup() {
    this.addGroupForm.reset();
    this.showAddGroup = true;
    this.isEdit = false;
    this.modalHeader = 'Add Group';
  }

  addMember(groups: TastingGroup) {
    this.addMemberForm.reset();
    this.selectedGroupForEdit = groups;
    this.showMemberModal = true;
    this.isEditMember = false;
    this.memberModalHeader = 'Add Member';
  }

  createMemberForm() {
    this.addMemberForm = new FormGroup({
      MemberId: new FormControl(null),
      MemberName: new FormControl(null, [Validators.required]),
      MemberEmail: new FormControl(null, [Validators.required, Validators.email]),
      MemberPhone: new FormControl(null, [Validators.required])
  }, { updateOn: 'blur' });
  }

  createAddGroupForm() {
    this.addGroupForm = new FormGroup({
      GroupName: new FormControl(null, [Validators.required]),
      SponsorName: new FormControl(null, [Validators.required]),
      SponsorPhone: new FormControl(null, [Validators.required]),
      SponsorEmail: new FormControl(null),
      OrganizationName: new FormControl(null),
      MaxGroupSize: new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });
  }

  editGroup(groups: TastingGroup) {
    this.isEdit = true;
    this.showAddGroup = true;
    this.selectedGroupForEdit = groups;
    this.addGroupForm.patchValue(this.selectedGroupForEdit);
    this.modalHeader = 'Edit Group Details';
  }

  editMember(member: Member, group: TastingGroup) {
    this.isEditMember = true;
    this.showMemberModal = true;
    this.selectedMemberForEdit = member;
    this.selectedGroupForEdit = group;
    this.addMemberForm.patchValue(this.selectedMemberForEdit);
    this.memberModalHeader = 'Edit Member Details'
  }

  onSubmit() {
    if (this.addGroupForm.valid) {
      if (!this.isEdit) {
        this.groupsService.addTastingGroup(this.addGroupForm.getRawValue()).pipe(takeUntil(this.ngDestroyed$)).subscribe(() => {
          this.groups$ = this.groupsService.getAllTastingGroups();
          this.messageService.add({
            severity: 'success',
            summary: 'Group Added',
            detail:`${this.addGroupForm.getRawValue().GroupName} has been successfully added!`
          });
        });
        this.showAddGroup = false;
        this.changeDetector.detectChanges();
      } else {
        const editableGroup = this.addGroupForm.getRawValue();
        editableGroup.GroupId = this.selectedGroupForEdit.GroupId;
        this.groupsService.editTastingGroup(editableGroup).pipe(takeUntil(this.ngDestroyed$)).subscribe(() => {
          this.groups$ = this.groupsService.getAllTastingGroups();
          this.messageService.add({
            severity: 'success',
            summary: 'Tasting Group Updated',
            detail:`${this.addGroupForm.getRawValue().GroupName} has been successfully updated!`
          });
          this.showAddGroup = false;
          this.changeDetector.detectChanges();
        })
      }
    }
  }

  onSubmitMember() {
    if (this.addMemberForm.valid) {
      if (!this.isEditMember) {
        this.memberService.addMemberToTastingGroup(this.selectedGroupForEdit.GroupId, this.addMemberForm.getRawValue()).pipe(takeUntil(this.ngDestroyed$)).subscribe(() => {
          this.groups$ = this.groupsService.getAllTastingGroups();
          this.messageService.add({
            severity: 'success',
            summary:'Member Added',
            detail: `${this.addMemberForm.getRawValue().MemberName} has been successfully added to ${this.selectedGroupForEdit.GroupName}!`
          });
        });
        this.showMemberModal = false;
      } else {
        console.log(this.selectedGroupForEdit.GroupId, this.addMemberForm.getRawValue());
        
        this.memberService.editMemberInTastingGroup(this.selectedGroupForEdit.GroupId, this.addMemberForm.getRawValue()).pipe(takeUntil(this.ngDestroyed$)).subscribe(() => {
          this.groups$ = this.groupsService.getAllTastingGroups();
          this.messageService.add({
            severity: 'success',
            summary:'Member Updated',
            detail: `${this.addMemberForm.getRawValue().MemberName}'s details have been updated!`
          });
        });
        this.showMemberModal = false;
      }
    }
  }

  deleteGroup(groups: TastingGroup) {
    this.groupsService.deleteTastingGroup(groups.GroupId).pipe(takeUntil(this.ngDestroyed$)).subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Group Deleted',
        detail:`${groups.GroupName} has been successfully deleted.`
      });
      this.groups$ = this.groupsService.getAllTastingGroups();
    });
    this.changeDetector.detectChanges();
  }

  deleteMember(member: Member, group: TastingGroup) {
    this.memberService.deleteMemberFromTastingGroup(group.GroupId, member.MemberId).pipe(takeUntil(this.ngDestroyed$)).subscribe((res) => {
      if (res) {
        this.messageService.add({
          severity: 'success',
          summary: 'Member Deleted',
          detail: `${member.MemberName} has been successfully removed.`
        });
      }
      this.groups$ = this.groupsService.getAllTastingGroups();
    });
  }
}
