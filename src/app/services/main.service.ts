import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  user: any = null;

  async createNewUser(email: string, password: string, displayName?: String) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        console.log('result : ', result);
        this.user = await this.afAuth.currentUser;
        this.router.navigate(['']);
      })
      .catch((error) => {
        console.error('error : ', error);
      });
  }

  async login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        this.user = await this.afAuth.currentUser;
        this.router.navigate(['']);
      })
      .catch((error) => {});
  }

  constructor(public afAuth: AngularFireAuth, private router: Router) {}
}
