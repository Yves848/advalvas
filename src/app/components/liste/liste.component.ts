import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { MealsService } from '../../services/meals.service';
import * as Meals from '../../interfaces/interfaces';
import { meal } from '../../interfaces/interfaces';
import { CategoriesService } from '../../services/categories.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddmealComponent } from '../addmeal/addmeal.component';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  providers: [DialogService]
})
export class ListeComponent implements OnInit, OnDestroy {
  EVENTS: meal[] = [];
  visibleSidebar2 = true;
  ref: DynamicDialogRef | undefined;

  constructor(
    public ws: MainService,
    private mealService: MealsService,
    private categService: CategoriesService,
    private dialogService: DialogService
  ) {}

  onPlusClick = (id: string) => {
    console.log('click', id);
  };

  onMinusClick = (id: string) => {
    console.log('minusclick', id);
    this.categService.removeMeal(id);
    this.getMeals();
  };

  asyncForEach = async (anArray: any[], callbak: any) => {
    console.log('for');
    for (var i = 0; i <= anArray.length - 1; i++) {
      await callbak(anArray[i]);
    }
  };

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  show() {
    this.ref = this.dialogService.open(AddmealComponent,{
      header: "Ajouter un repas",
      width: '60rem',
      contentStyle: {"max-height": "1000px", "overflow": "auto"},
      baseZIndex: 10000
    })
  }

  getMeals = async () => {
    console.log('getMeals');
    const tempEvents: meal[] = [];
    var aRes: any[] = [];
    this.mealService.getMeals().subscribe(async (res) => {
      aRes = res;
      console.log('res', aRes);
      this.EVENTS = [];
      await this.asyncForEach(aRes, (element: any) => {
        const aMeal: Meals.meal = <Meals.meal>element.payload.doc.data();
        aMeal.id = element.payload.doc.id;
        console.log('foreach ', aMeal.id, aMeal.date);
        const pos = tempEvents
          .map(function (e) {
            return e.id;
          })
          .indexOf(aMeal.id);
        if (pos === -1) {
          tempEvents.push(aMeal);
        }
      });

      this.EVENTS = tempEvents.sort((meal1: meal, meal2: meal) => {
        const t1 = `${meal1.date}T${meal1.moment}`;
        const t2 = `${meal2.date}T${meal2.moment}`;
        if (t1 >= t2) return 1;
        else return -1;
      });
    });
  };

  async ngOnInit() {
    await this.getMeals();
    console.log('init');
  }
}
