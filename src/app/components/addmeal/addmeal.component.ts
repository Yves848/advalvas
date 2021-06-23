import { Component, OnInit } from '@angular/core';
import * as Meals from '../../interfaces/interfaces';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.component.html',
  styleUrls: ['./addmeal.component.scss'],
})
export class AddmealComponent implements OnInit {
  rHours = new Map<Meals.mealType, String>();

  hours = [
    { moment: Meals.mealType.Dejeuner, name: 'Déjeuner', color: 'green' },
    { moment: Meals.mealType.DixHeure, name: '10h', color: 'red' },
    { moment: Meals.mealType.Diner, name: 'Dîner', color: 'yellow' },
    { moment: Meals.mealType.SeizeHeure, name: '16h', color: 'blue' },
    { moment: Meals.mealType.Souper, name: 'Souper', color: 'teal' },
  ];
  selectedHour: any;
  filteredHours: any[] = [];
  aMeal: Meals.meal = {
    date: '',
    content: '',
    moment: Meals.mealType.Dejeuner,
  };
  dateRepas: Date = new Date();
  selectedValue : string = '';
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.rHours.set(Meals.mealType.Dejeuner, 'Déjeuner');
    this.rHours.set(Meals.mealType.DixHeure, '10h');
    this.rHours.set(Meals.mealType.Diner, 'Dîner');
    this.rHours.set(Meals.mealType.SeizeHeure, '16h');
    this.rHours.set(Meals.mealType.Souper, 'Souper');

  }

  saveMeal = (event: MouseEvent) => {
    this.aMeal = {
      date: this.aMeal.date,
      moment: this.selectedHour.moment,
      content: this.aMeal.content,
    };
    this.mainService.EVENTS.push({
      //id: this.id,
      start: `${this.aMeal.date}T${this.selectedHour.moment}`,
      title: this.aMeal.content,
      meal: this.aMeal,
    });
    console.log('saveMeal [this.aMeal]', this.aMeal);
  };
}
