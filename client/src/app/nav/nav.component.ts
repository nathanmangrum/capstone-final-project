import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items!: MenuItem[];
  showRegisterDialog: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Whiskies',
        command: () => { this.router.navigate(['/**']) }
      },
      {
        label: 'Tasting Groups',
        command: () => { this.router.navigate(['/tasting-groups']) }
      },
      {
        label: 'Register a group',
        command: () => { this.openRegisterDialog() }
      }
    ];
  }

  routeToWhiskiesComponent() {
    console.log('whiskies component');
  }

  routeToGroupsComponent() {
    console.log('is it trying');
    this.router.navigateByUrl('/tasting-groups');
  }

  openRegisterDialog() {
    this.showRegisterDialog = true;
  }

}
