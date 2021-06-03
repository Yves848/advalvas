import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  CalendarOptions,
  EventApi,
  EventClickArg,
  EventHoveringArg,
  FullCalendarComponent,
} from '@fullcalendar/angular';
import { DateClickArg } from '@fullcalendar/interaction';
import { CategoriesService } from '../../services/categories.service';
import { MainService } from '../../services/main.service';
import { MealsService } from 'src/app/services/meals.service';
import * as Meals from '../../interfaces/interfaces';
import { OverlayPanel } from 'primeng/overlaypanel';
import { empty } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalenComponent implements OnInit {
  @ViewChild('calendar') calendar: FullCalendarComponent | undefined;
  @ViewChild('op') op: OverlayPanel | undefined;

  id: string = '';
  anEvent: any;
  aMeal: Meals.meal = {date: "", content: "", moment: Meals.mealType.Dejeuner};


  rHours = new Map<Meals.mealType,String>();


  hours = [
    { moment: Meals.mealType.Dejeuner, name: 'Déjeuner' },
    { moment: Meals.mealType.DixHeure, name: '10h' },
    { moment: Meals.mealType.Diner, name: 'Dîner' },
    { moment: Meals.mealType.SeizeHeure, name: '16h' },
    { moment: Meals.mealType.Souper, name: 'Souper' },
  ];
  selectedHour: any;
  filteredHours: any[] = [];

  onClick(arg: EventClickArg) {
    const el = this.calendar?.getApi().getEventById(arg.event.id);
    this.id = arg.event.id;
    this.anEvent = arg;
    this.aMeal = <Meals.meal>arg.event.extendedProps.meal;
    console.log('aMeal', this.aMeal);
    this.selectedHour = this.rHours.get(this.aMeal.moment);
    console.log(this.selectedHour)
    this.op?.toggle(arg.event, arg.el);
  }

  filterHour(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.hours.length; i++) {
      let hour = this.hours[i];
      if (hour.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(hour);
      }
    }

    this.filteredHours = filtered;
  }

  saveMeal = (event: MouseEvent) => {
    console.log("save", event);
    console.log('moment',this.selectedHour);
    const eventObj = this.calendar?.getApi().getEventById(this.id);
    console.log("save", eventObj);
    const anEvent = <EventClickArg>this.anEvent;
    this.aMeal = {date: this.aMeal.date,
      moment:  this.selectedHour.moment,
      content: this.aMeal.content};
    eventObj?.setExtendedProp('meal',this.aMeal);
    this.op?.toggle(anEvent.event, anEvent.el);
  }

  getMeals = () => {
    console.log('getMeals');
    this.mealService.getMeals().subscribe((res) => {
      this.mainService.EVENTS = [];
      res.forEach((element) => {
        const aMeal: Meals.meal = <Meals.meal>element.payload.doc.data();
        this.mainService.EVENTS.push({
          id: element.payload.doc.id,
          start: `${aMeal.date}T${aMeal.moment}`,
          title: aMeal.content,
          meal: aMeal,
        });
      });
      this.calendarOptions.events = this.mainService.EVENTS;
    });
  };

  checkID = (el: any) => {
    return el.id === this.id;
  };

  deleteEvent = (event: MouseEvent) => {
    const eventObj = this.calendar?.getApi().getEventById(this.id);
    const anEvent = <EventClickArg>this.anEvent;
    this.op?.toggle(anEvent.event, anEvent.el);
    eventObj?.remove();
    this.categService.removeMeal(this.id);
  };

  addEvent = () => {
    console.log('addEvent');
  };

  onDateClick(args: DateClickArg) {
    const aData: Meals.meal = {
      date: `${args.dateStr}`,
      moment: Meals.mealType.Dejeuner,
      content: `${args.dateStr} Event`,
    };
    this.categService.putMeal(aData);
  }

  constructor(
    public mainService: MainService,
    private mealService: MealsService,
    private categService: CategoriesService
  ) {

  }

  eventAdd(addIndo: any) {
    console.log('eventAdd :', addIndo);
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'fr',
    buttonText: {
      today: "Aujourd'hui",
    },
    editable: true,
    height: '80vh',
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
    this.rHours.set(Meals.mealType.Dejeuner,"Déjeuner");
    this.rHours.set(Meals.mealType.DixHeure,"10h");
    this.rHours.set(Meals.mealType.Diner,"Dîner");
    this.rHours.set(Meals.mealType.SeizeHeure,"16h");
    this.rHours.set(Meals.mealType.Souper,"Souper");

  }
}
