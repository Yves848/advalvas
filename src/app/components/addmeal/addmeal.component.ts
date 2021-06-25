import { Component, OnInit } from '@angular/core';
import * as Meals from '../../interfaces/interfaces';
import { MainService } from '../../services/main.service';
import { CategoriesService } from 'src/app/services/categories.service';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

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
  selectedHour= this.hours[0];
  filteredHours: any[] = [];
  aMeal: Meals.meal = {
    date: '',
    content: '',
    moment: Meals.mealType.Dejeuner,
  };
  dateRepas: Date = new Date();
  selectedValue : string = '';
  constructor(private mainService: MainService, private categorieService: CategoriesService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}

  getHourIndex = (amoment: Meals.mealType) => {
    const index = this.hours.map(hour => {return hour.moment}).indexOf(amoment);
    return index;
  }

  ngOnInit(): void {
    this.rHours.set(Meals.mealType.Dejeuner, 'Déjeuner');
    this.rHours.set(Meals.mealType.DixHeure, '10h');
    this.rHours.set(Meals.mealType.Diner, 'Dîner');
    this.rHours.set(Meals.mealType.SeizeHeure, '16h');
    this.rHours.set(Meals.mealType.Souper, 'Souper');
    console.log('config ',this.config.data)
    const {data} = this.config;
    if (data.aMeal) {
      this.selectedHour = this.hours[this.getHourIndex(data.aMeal.moment)];
      this.dateRepas = new Date(data.aMeal.date);
      this.aMeal = data.aMeal;
    }

  }

  close = () => {
    this.ref.close();
  }



  saveMeal =async  (event: MouseEvent) => {
    const jour = this.dateRepas.getDate().toString().padStart(2,'0');
    const mois = (this.dateRepas.getMonth()+1).toString().padStart(2,'0');
    const annee = this.dateRepas.getFullYear().toString();
    const sdate = `${annee}-${mois}-${jour}`;
    console.log('date:',sdate)
    this.aMeal = {
      date: sdate,
      moment: this.selectedHour.moment,
      content: this.aMeal.content,
    };
    var id = '';
    if (this.config.data.mode === 0) {
    id = await this.categorieService.putMeal(this.aMeal);
    console.log('saveMeal [this.aMeal]', id);

    }
    else {
      id = this.config.data.aMeal.id
      this.categorieService.updateMeal(id,this.aMeal);

    }
    this.ref.close(id);
  };
}
