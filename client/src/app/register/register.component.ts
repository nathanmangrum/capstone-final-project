import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() isRegisterClicked: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isRegisterClicked = true;
  }

}
