import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items!: MenuItem[];
  showRegisterDialog: boolean = false;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Whiskies',
        command: this.routeToWhiskiesComponent
      },
      {
        label: 'Tasting Groups',
        command: this.routeToGroupsComponent
      },
      {
        label: 'Register a group',
        command: this.openRegisterDialog
      }
    ];
  }

  routeToWhiskiesComponent() {
    console.log('whiskies component');
  }

  routeToGroupsComponent() {
    console.log('groups component');
  }

  openRegisterDialog() {
    this.showRegisterDialog = true;
  }

}
