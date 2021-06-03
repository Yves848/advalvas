import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, EventClickArg, EventHoveringArg, FullCalendarComponent } from '@fullcalendar/angular';
import { DateClickArg } from '@fullcalendar/interaction';
import { CategoriesService } from '../../services/categories.service';
import { MainService } from '../../services/main.service';
import { MealsService } from 'src/app/services/meals.service';
import * as Meals from '../../interfaces/interfaces';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalenComponent implements OnInit {

  @ViewChild('calendar') calendar: FullCalendarComponent | undefined;

  onClick(arg: EventClickArg) {
    const el = this.calendar?.getApi().getEventById(arg.event.id);
    console.log(el);
    console.log(arg.event.id);
  }

  getMeals= () => {
    this.mealService.getMeals().subscribe(res => {
      this.mainService.EVENTS = [];
      res.forEach(element => {
        const aMeal: Meals.meal = <Meals.meal>element.payload.doc.data();
        // console.log('Index : ',element.payload.doc.id);
        // console.log('res : ',aMeal.date, aMeal.content);
        this.mainService.EVENTS.push(
          {
            id: element.payload.doc.id,
            start: aMeal.date,
            title: aMeal.content,
            extendedProps: aMeal
          }
        );
      });
      this.calendarOptions.events = this.mainService.EVENTS;
    });
  }

  addEvent = () => {
    console.log('addEvent');
  };

  onDateClick(args: DateClickArg) {
    console.log(args);
    console.log('Date :',args.dateStr);
    const aData : Meals.meal = {
      date: `${args.dateStr}T${Meals.mealType.Dejeuner}`,
      moment: Meals.mealType.Dejeuner,
      content: `${args.dateStr} Event`
    }
    this.categService.putMeal(aData);
  }

  constructor(
    public mainService: MainService,
    private mealService: MealsService,
    private categService: CategoriesService
  ) { }

  eventAdd(addIndo : any) {
    console.log('eventAdd :',addIndo)
  }

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
    eventAdd: this.eventAdd.bind(this),
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
