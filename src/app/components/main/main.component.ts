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
  items: MenuItem[] = [];

  constructor(
    public mainService: MainService,
    public auth: AngularFireAuth,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.items = [{ label: 'Fichier' }];
  }

  public signIn() {
    this.router.navigate(['signin']);
  }
}
