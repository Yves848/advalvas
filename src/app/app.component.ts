import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {

  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  title = 'advalvas';
}
