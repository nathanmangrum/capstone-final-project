import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { TastingGroup } from '../models/tasting-group';
import { MemberService } from '../services/member.service';
import { TastingGroupService } from '../services/tasting-group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {

  @Input() groupDetails!: TastingGroup;
  member!: Member;

  constructor(private readonly groupService: TastingGroupService) { }

  ngOnInit() {
    console.log(this.groupDetails);
  }
  // TODO add modal in template and finish functionality
  editMember(member: Member) {
    // this.member = {...member};
    // this.memberEditModal = true;
  }
  //TODO fix this 
  deleteMember(member: Member) {
    // const mem = this.groupDetails.Members.find(id => );
    // this.groupService.deleteMemberFromTastingGroup();
  }

}
