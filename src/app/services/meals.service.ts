import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { meal, mealType } from '../interfaces/interfaces';
import * as meals from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class MealsService {
  rHours = new Map<meals.mealType,String>();

  hours = [
    { moment: meals.mealType.Dejeuner, name: 'Déjeuner', color: 'green' },
    { moment: meals.mealType.DixHeure, name: '10h', color: 'red' },
    { moment: meals.mealType.Diner, name: 'Dîner', color: 'yellow' },
    { moment: meals.mealType.SeizeHeure, name: '16h', color: 'blue' },
    { moment: meals.mealType.Souper, name: 'Souper', color: 'teal' },
  ];

  getHourIndex = (amoment: meals.mealType) => {
    const index = this.hours.map(hour => {return hour.moment}).indexOf(amoment);
    return index;
  }

  getMeals() {
    return this.firestore.collection('meals').snapshotChanges();
  }

  async getMeals2() {
    var meals: meal[] = [];
    var ref = this.firestore.collection('meals');
    var data = await ref.get().toPromise().then(snapshot => {
      snapshot.forEach(doc => {
        const item = doc.data();
        meals.push(<meal>item);
        //console.log(doc.data());
      })
    })
    return meals;
  }

  constructor(private firestore: AngularFirestore) {}

  putMeal( aData: meal) {
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
