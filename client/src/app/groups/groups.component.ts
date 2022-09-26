import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TastingGroup } from '../models/tasting-group';
import { TastingGroupService } from '../services/tasting-group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  tastingGroups!: Array<TastingGroup>;
  groups$!: Observable<TastingGroup[]>;
  selectedGroup!: TastingGroup;
  showDetails = false;
  showAddGroup = false;

  constructor(private readonly router: Router, private readonly groupsService: TastingGroupService) { }

  ngOnInit(): void {
    this.groups$ = this.groupsService.getAllTastingGroups();
    console.log(this.groups$);
  }

  showGroupDetails(group: TastingGroup) {
    this.showDetails = true;
    this.selectedGroup = group;
  }
}
