import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, EventApi, EventClickArg, EventHoveringArg, FullCalendarComponent } from '@fullcalendar/angular';
import { DateClickArg } from '@fullcalendar/interaction';
import { CategoriesService } from '../../services/categories.service';
import { MainService } from '../../services/main.service';
import { MealsService } from 'src/app/services/meals.service';
import * as Meals from '../../interfaces/interfaces';
import { OverlayPanel } from 'primeng/overlaypanel';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalenComponent implements OnInit {

  @ViewChild('calendar') calendar: FullCalendarComponent | undefined;
  @ViewChild('op') op: OverlayPanel | undefined;
  id : string = "";
  anEvent: any;

  onClick(arg: EventClickArg) {
    const el = this.calendar?.getApi().getEventById(arg.event.id);
    this.id = arg.event.id;
    this.anEvent = arg;
    this.op?.toggle(arg.event,arg.el);
  }

  getMeals= () => {
    console.log("getMeals");
    this.mealService.getMeals().subscribe(res => {
      this.mainService.EVENTS = [];
      res.forEach(element => {
        const aMeal: Meals.meal = <Meals.meal>element.payload.doc.data();
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

  checkID= (el: any) => {
    return el.id === this.id;
  }

  deleteEvent = (event: MouseEvent) => {
    const eventObj  = this.calendar?.getApi().getEventById(this.id);
    const anEvent = <EventClickArg>this.anEvent;
    this.op?.toggle(anEvent.event, anEvent.el);
    eventObj?.remove();
    this.categService.removeMeal(this.id);
  }

  addEvent = () => {
    console.log('addEvent');
  };

  onDateClick(args: DateClickArg) {
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
