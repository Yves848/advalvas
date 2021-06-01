import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventClickArg, EventHoveringArg } from '@fullcalendar/angular';
import { DateClickArg } from '@fullcalendar/interaction';
import { CategoriesService } from '../../services/categories.service';
import { MainService } from '../../services/main.service';
import { MealsService } from 'src/app/services/meals.service';
import * as meals from '../../interfaces/interfaces';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  onClick(arg: EventClickArg) {
    console.log(arg);

  }

  getMeals= () => {
    this.mealService.getMeals().subscribe(res => {
      res.forEach(element => {
        console.log('res : ',element);
      });
    });
  }

  onDateClick(args: DateClickArg) {
    console.log(args);
    console.log('Date :',args.dateStr);
    const aData : meals.meal = {
      date: args.dateStr,
      moment: meals.mealType.Dejeuner,
      content: `${args.dateStr} Event`
    }

    this.categService.putMeal(aData);
  }

  constructor(
    private mainService: MainService,
    private mealService: MealsService,
    private categService: CategoriesService
  ) { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'fr',
    buttonText: {
      today: "Aujourd'hui",
    },
    editable: true,
    //eventMouseEnter: this.onHover.bind(this),
    //eventMouseLeave: this.onLeave.bind(this),
    eventClick: this.onClick.bind(this),
    dateClick: this.onDateClick.bind(this),
    events: this.mainService.EVENTS,
    headerToolbar: {
      left: 'title',
      center: 'today',
      right: 'prev,next',
    },
  };

  ngOnInit(): void {
    this.getMeals();
  }

}
