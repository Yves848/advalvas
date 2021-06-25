import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Meals from '../../interfaces/interfaces';
import { MainService } from '../../services/main.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MealsService } from 'src/app/services/meals.service';
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.component.html',
  styleUrls: ['./addmeal.component.scss'],
  providers:[MessageService]
})
export class AddmealComponent implements OnInit {
  @ViewChild('content') content: ElementRef | undefined;

  selectedHour = this.mealService.hours[0];
  filteredHours: any[] = [];
  aMeal: Meals.meal = {
    date: '',
    content: '',
    moment: Meals.mealType.Dejeuner,
  };
  dateRepas: Date = new Date();
  selectedValue: string = '';
  constructor(
    private messageService: MessageService,
    private mainService: MainService,
    private categorieService: CategoriesService,
    public mealService: MealsService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  getHourIndex = (amoment: Meals.mealType) => {
    const index = this.mealService.hours
      .map((hour) => {
        return hour.moment;
      })
      .indexOf(amoment);
    return index;
  };

  ngOnInit(): void {
    console.log('config ', this.config.data);
    const { data } = this.config;
    if (data.aMeal) {
      this.selectedHour = this.mealService.hours[this.getHourIndex(data.aMeal.moment)];
      this.dateRepas = new Date(data.aMeal.date);
      this.aMeal = data.aMeal;
    }
    setTimeout(() => {
      // this will make the execution after the above boolean has changed
      this.content?.nativeElement.focus();
    }, 0);
  }

  close = () => {
    this.ref.close();
  };

  saveMeal = async (event: MouseEvent) => {
    const jour = this.dateRepas.getDate().toString().padStart(2, '0');
    const mois = (this.dateRepas.getMonth() + 1).toString().padStart(2, '0');
    const annee = this.dateRepas.getFullYear().toString();
    const sdate = `${annee}-${mois}-${jour}`;
    console.log('date:', sdate);
    this.aMeal = {
      date: sdate,
      moment: this.selectedHour.moment,
      content: this.aMeal.content,
    };
    var id = '';
    if (this.config.data.mode === 0) {
      id = await this.categorieService.putMeal(this.aMeal);
      this.messageService.add({severity:'success', summary:'Ajout du repas', detail: `${this.aMeal.date} - ${this.aMeal.content}`});
      console.log('saveMeal [this.aMeal]', id);
    } else {
      id = this.config.data.aMeal.id;
      this.categorieService.updateMeal(id, this.aMeal);
    }
    this.ref.close(this.aMeal);
  };
}
