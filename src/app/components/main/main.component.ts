import { Component, OnInit } from '@angular/core';
import { MainService } from './../../services/main.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public mainService: MainService, public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
