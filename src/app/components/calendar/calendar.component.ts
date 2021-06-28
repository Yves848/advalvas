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
import { Router } from '@angular/router';

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

  selectedHour: any;
  filteredHours: any[] = [];

  onClick(arg: EventClickArg) {
    const el = this.calendar?.getApi().getEventById(arg.event.id);
    this.id = arg.event.id;
    this.anEvent = arg;
    this.aMeal = <Meals.meal>arg.event.extendedProps.meal;
    console.log('aMeal', this.aMeal);
    //this.selectedHour = this.rHours.get(this.aMeal.moment);
    this.selectedHour = this.mealService.hours[this.mealService.getHourIndex(this.aMeal.moment)];
    console.log('this.selectedHour',this.selectedHour)
    this.op?.toggle(arg.event, arg.el);
  }

  eventChange = (updateInfo: any) => {
    console.log('eventChange ', updateInfo);
  }

  filterHour(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.mealService.hours.length; i++) {
      let hour = this.mealService.hours[i];
      if (hour.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(hour);
      }
    }

    this.filteredHours = filtered;
  }

  saveMeal = (event: MouseEvent) => {
    const eventObj = this.calendar?.getApi().getEventById(this.id);
    console.log('saveMeal [moment]',this.selectedHour);
    console.log("saveMeal [eventObj]", eventObj);
    const anEvent = <EventClickArg>this.anEvent;
    this.aMeal = {
      date: this.aMeal.date,
      moment:  this.selectedHour.moment,
      content: this.aMeal.content
    };
    this.mainService.EVENTS.push({
      id: this.id,
      start: `${this.aMeal.date}T${this.selectedHour.moment}`,
      title: this.aMeal.content,
      meal: this.aMeal,
    });
    console.log("saveMeal [this.aMeal]", this.aMeal);
    eventObj?.setStart(`${this.aMeal.date}T${this.selectedHour.moment}`)
    eventObj?.setExtendedProp('meal',this.aMeal);
    eventObj?.setProp('title',this.aMeal.content);
    this.mealService.updateMeal(this.id,this.aMeal);
    this.op?.toggle(anEvent.event, anEvent.el);
  }

  getMeals = () => {
    console.log('getMeals');
    this.mealService.getMeals().subscribe((res) => {
      this.mainService.EVENTS = [];
      this.calendar?.getApi().removeAllEvents();
      res.forEach((element) => {
        const aMeal: Meals.meal = <Meals.meal>element.payload.doc.data();
        const anApi = this.calendar?.getApi().addEvent({
          id: element.payload.doc.id,
          start: `${aMeal.date}T${aMeal.moment}`,
          title: aMeal.content,
          meal: aMeal,
          className: 'red'
        });
      });
    });
  };

  checkID = (el: any) => {
    return el.id === this.id;
  };

  listClick = () => {
    console.log('listClick');
    this.router.navigate(['list']);
  }

  deleteEvent = (event: MouseEvent) => {
    const eventObj = this.calendar?.getApi().getEventById(this.id);
    const anEvent = <EventClickArg>this.anEvent;
    this.op?.toggle(anEvent.event, anEvent.el);
    eventObj?.remove();
    this.mealService.removeMeal(this.id);
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
    this.mealService.putMeal(aData);
  }

  constructor(
    public mainService: MainService,
    public mealService: MealsService,
    private categService: CategoriesService,
    private router: Router
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
    eventChange: this.eventChange,
    //eventMouseEnter: this.onHover.bind(this),
    //eventMouseLeave: this.onLeave.bind(this),
    eventClick: this.onClick.bind(this),
    dateClick: this.onDateClick.bind(this),
    events: this.mainService.EVENTS,
    headerToolbar: {
      left: 'title dayGridMonth,dayGridWeek,timeGridDay',
      center: 'today',
      right: 'prev,next',
    },
  };

  ngOnInit(): void {
    this.getMeals();

  }
}
