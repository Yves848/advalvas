import { Component, OnInit } from '@angular/core';
import { MainService } from './../../services/main.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {


  constructor(
  ) {}

  ngOnInit() {}

}
