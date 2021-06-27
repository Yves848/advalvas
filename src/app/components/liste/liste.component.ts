import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { MealsService } from '../../services/meals.service';
import * as Meals from '../../interfaces/interfaces';
import { meal } from '../../interfaces/interfaces';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddmealComponent } from '../addmeal/addmeal.component';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  providers: [DialogService,MessageService]
})
export class ListeComponent implements OnInit, OnDestroy {
  EVENTS: meal[] = [];
  visibleSidebar2 = true;
  ref: DynamicDialogRef | undefined;

  constructor(
    public ws: MainService,
    private mealService: MealsService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  scrapeClick =async  () => {

  }

  onMinusClick = async (id: string) => {
    console.log('minusclick', id);
    this.mealService.removeMeal(id);
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

  rateChange = (event: any, aMeal: meal) => {
    console.log('ratechange',event,aMeal)
    aMeal.rating = event.value;
    this.mealService.updateMeal(<string>aMeal.id,aMeal);
  }

  rateClean = (event : any, aMeal : meal) => {
    console.log('rateClean',event,aMeal)
    aMeal.rating = 0;
    this.mealService.updateMeal(<string>aMeal.id,aMeal);
  }


  Edit(event: meal) {
    const ref = this.dialogService.open(AddmealComponent,{
      data: {mode: 1,aMeal: event},
      header: "Ajouter un repas",
      width: '60rem',
      contentStyle: {"max-height": "1100px", "overflow": "auto"},
      baseZIndex: 10000
    })
    ref.onClose.subscribe((data: meal) => {
      if (data) {
          console.log("data",data)
          this.messageService.add({severity:'success', summary:'Modification du repas', detail: data.content});
      }
  });
  }



  Add() {
    this.ref = this.dialogService.open(AddmealComponent,{
      data: {mode: 0},
      header: "Ajouter un repas",
      width: '60rem',
      contentStyle: {"max-height": "1000px", "overflow": "auto"},
      baseZIndex: 10000
    })

    this.ref.onClose.subscribe((data: meal) => {
      if (data) {
          console.log("id",data.id)
          this.messageService.add({severity:'success', summary:'Ajour du repas', detail: data.content});
      }
  });
  }



  getMeals = async () => {
    console.log('getMeals');
    const tempEvents: meal[] = [];
    var aRes: any[] = [];
    this.mealService.getMeals().subscribe(async (res) => {
      aRes = res;
      //console.log('res', aRes);

      await this.asyncForEach(aRes, (element: any) => {
        const aMeal: Meals.meal = <Meals.meal>element.payload.doc.data();
        aMeal.id = element.payload.doc.id;
        //console.log('foreach ', aMeal.id, aMeal.date);
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
