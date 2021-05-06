import { Component, OnInit } from '@angular/core';
import { MainService } from './../../services/main.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  displayName: string = '';
  email: string = '';
  password: string = '';

  constructor(public mainService:MainService) { }

  ngOnInit(): void {

  }

  submit() {
    console.log('displayName: ',this.displayName);
    console.log('email: ',this.email);
    console.log('password: ',this.password);
    this.mainService.createNewUser(this.email, this.password, this.displayName);
  }

  clear() {
    this.displayName = '';
    this.email = '';
    this.password = '';
  }
}
