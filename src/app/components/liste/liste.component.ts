import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { MealsService } from '../../services/meals.service';
import * as Meals from '../../interfaces/interfaces';
import { meal } from '../../interfaces/interfaces';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
})
export class ListeComponent implements OnInit {
  EVENTS: meal[] = [];

  constructor(public ws: MainService, private mealService: MealsService) {}

  getMeals = async () => {
    console.log('getMeals');
    const tempEvents: meal[] = [];
    this.mealService.getMeals().subscribe((res) => {
      res.forEach((element) => {
        const aMeal: Meals.meal = <Meals.meal>element.payload.doc.data();
        aMeal.id = element.payload.doc.id;
        const pos = tempEvents
          .map(function (e) {
            return e.id;
          })
          .indexOf(aMeal.id);
        if (pos === -1) {
          tempEvents.push(aMeal);
        }
      });
      this.EVENTS = [];
      this.EVENTS = tempEvents.sort((meal1: meal, meal2: meal) => {
        const t1 = `${meal1.date}T${meal1.moment}`;
        const t2 = `${meal2.date}T${meal2.moment}`;
        console.log('t1 ', t1);
        console.log('t2 ', t2);
        if (t1 >= t2) return 1;
        else return -1;
      });
    });
  };

  async ngOnInit() {
    await this.getMeals();
  }
}
