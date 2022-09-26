import { Component, Input, OnInit } from '@angular/core';
import { TastingGroup } from '../models/tasting-group';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {

  @Input() groupDetails!: TastingGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.groupDetails);
  }

}
