import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { meal, mealType } from '../interfaces/interfaces'


@Injectable({
  providedIn: 'root'
})
export class MealsService {

  getMeals() {
    return this.firestore.collection('meals').snapshotChanges();
  }

  constructor(private firestore: AngularFirestore) {}

  putMeal(aData: meal) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("meals").add(aData).then(res => {
        console.log('Résultat : ',res);
        resolve(res.id);
      }, err => reject(err))
    });
  }

  removeMeal(mealId : string) {
    this.firestore.collection('meals').doc(mealId).delete();
  }

  updateMeal(id : string, aData : meal) {
    this.firestore.collection('meals').doc(id).update(aData);
  }

}
