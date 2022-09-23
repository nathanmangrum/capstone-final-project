import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { TastingGroupService } from '../services/tasting-group.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() isRegisterClicked: boolean = false;
  registerForm!: FormGroup;
  whiskeyOrganization = ['Scotch', 'Bourbon', 'Rye'];
  ngDestroyed$: Subject<boolean> = new Subject();

  constructor(private readonly fb: FormBuilder,
              private readonly tastingService: TastingGroupService,
              private readonly messageService: MessageService) {
    
  }

  ngOnInit() {
    this.isRegisterClicked = true;
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      'GroupName': [null, Validators.required],
      'SponsorName': [null, Validators.required],
      'SponsorPhone': [null, Validators.required],
      'SponsorEmail': [null, Validators.required],
      'OrganizationName': [null, Validators.required],
      'MaxGroupSize': [null, Validators.required]
    }, { updateOn: 'blur' });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.tastingService.addTastingGroup(this.registerForm.getRawValue().pipe(takeUntil(this.ngDestroyed$)).subscribe(() => {
        this.tastingService.getAllTastingGroups();
        this.messageService.add({
          severity: 'success',
          summary: 'Group Added',
          detail:`${this.registerForm.getRawValue().GroupName} has been successfully added!`
        });
      }));
    }
  }

}
