import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MainService } from './../services/main.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(
    public mainService: MainService,
    public auth: AngularFireAuth,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.mainService.checkLocalStorage();
    this.items = [{ label: 'Fichier' }];
  }

  public signIn() {
    this.router.navigate(['signin']);
  }

}
