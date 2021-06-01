import { Injectable } from '@angular/core';
import * as meals  from '../interfaces/interfaces'
import { AngularFirestore  } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class MealsService {

  getMeals() {
    return this.firestore.collection('meals').snapshotChanges();
  }

  constructor(private firestore: AngularFirestore) { }
}
