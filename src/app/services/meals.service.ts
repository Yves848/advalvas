import { Injectable } from '@angular/core';
import * as meals  from '../interfaces/interfaces'
import { AngularFirestore  } from '@angular/fire/firestore';


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

  constructor(private firestore: AngularFirestore) {
    this.rHours.set(meals.mealType.Dejeuner,"Déjeuner");
    this.rHours.set(meals.mealType.DixHeure,"10h");
    this.rHours.set(meals.mealType.Diner,"Dîner");
    this.rHours.set(meals.mealType.SeizeHeure,"16h");
    this.rHours.set(meals.mealType.Souper,"Souper");

   }

}
