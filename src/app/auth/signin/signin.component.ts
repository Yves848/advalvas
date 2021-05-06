import { Component, OnInit } from '@angular/core';
import { MainService } from './../../services/main.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string= '';

  constructor(public mainService: MainService) { }

  submit(event: any) {
    console.log('email:',this.email);
    console.log('password:', this.password);
    this.mainService.login(this.email,this.password);

  }

  ngOnInit(): void {

  }

}
