import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  items!: MenuItem[];
  showRegisterDialog = false;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
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
        label: 'Register',
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
