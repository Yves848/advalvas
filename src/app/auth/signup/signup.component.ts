import { Component, OnInit } from '@angular/core';
import { MainService } from './../../services/main.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public mainService:MainService) { }

  ngOnInit(): void {

  }



}
