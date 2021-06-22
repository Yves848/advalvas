import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MealsService } from '../services/meals.service'

@Injectable({
  providedIn: 'root',
})
export class MainService {
  user: any = null;
  EVENTS:{}[] = [];

  async createNewUser(email: string, password: string, displayName?: String) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        console.log('result : ', result);
        this.user = await this.afAuth.currentUser;
        this.user.updateProfile({displayName: displayName});
        this.router.navigate(['']);
      })
      .catch((error) => {
        console.error('error : ', error);
      });
  }

  checkLocalStorage = () => {
    var localS  = localStorage.getItem('user');
    var local2 : string = '{}';
    if (localS) {
      local2 = localS;
    }
    const user = JSON.parse(local2);
    console.log('checkLocalStorage',user.displayName);
    if (user.displayName) {
      this.user = user;
      this.router.navigate(['calendar']);
    }

  }

  async login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        this.user = await this.afAuth.currentUser;
        localStorage.setItem('user',JSON.stringify(this.user));
        this.router.navigate(['calendar']);
      })
      .catch((error) => {});
  }

  async logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  constructor(public afAuth: AngularFireAuth, private router: Router, private mealService: MealsService) {}
}
