import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { MealsService } from '../../services/meals.service';
import { meal } from '../../interfaces/interfaces';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddmealComponent } from '../addmeal/addmeal.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  providers: [DialogService, MessageService],
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
  ) { }

  findEvent = (id: string): number => {
    console.log('findevent', this.EVENTS);
    const index = this.EVENTS.map(event => event.id).indexOf(id);
    return index;
  }

  onMinusClick = async (id: string) => {
    console.log('minusclick', id);
    const index = this.findEvent(id);
    console.log(this.EVENTS[index].content);
    this.EVENTS.splice(index, 1)
    this.mealService.removeMeal(id);
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
    aMeal.rating = event.value;
    this.mealService.updateMeal(<string>aMeal.id, aMeal);
  };

  rateClean = (event: any, aMeal: meal) => {
    aMeal.rating = 0;
    this.mealService.updateMeal(<string>aMeal.id, aMeal);
  };

  Edit(event: meal) {
    console.log('edit', event)
    const ref = this.dialogService.open(AddmealComponent, {
      data: { mode: 1, aMeal: event },
      header: 'Editer un repas',
      width: '60rem',
      contentStyle: { 'max-height': '1100px', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((data: meal) => {
      if (data) {
        if (data)
          console.log('data', data);
        this.messageService.add({
          severity: 'success',
          summary: 'Modification du repas',
          detail: data.content,
        });
      }
    });
  }

  addevent = (event: meal) => {

  }

  Add() {
    this.ref = this.dialogService.open(AddmealComponent, {
      data: { mode: 0 },
      header: 'Ajouter un repas',
      width: '60rem',
      contentStyle: { 'max-height': '1000px', overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        this.getMeals();
        const mode = data.mode;
        console.log('data', data);
        console.log('id', data.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Ajout du repas',
          detail: data.content,
        });
      }
    });
  }

  getMeals = async () => {
    //console.log('getMeals');
    const tempEvents: meal[] = [];

    const events = await this.mealService.getMeals2();
    console.log('res', events);
    await this.asyncForEach(events, (element: meal) => {
      tempEvents.push(element);
    });
    this.EVENTS = tempEvents.sort((meal1: meal, meal2: meal) => {
      const t1 = `${meal1.date}T${meal1.moment}`;
      const t2 = `${meal2.date}T${meal2.moment}`;
      if (t1 >= t2) return 1;
      else return -1;
    });
  };

  async ngOnInit() {
    await this.getMeals();
    //console.log('init');
  }
}
