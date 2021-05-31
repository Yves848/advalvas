import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventClickArg, EventHoveringArg } from '@fullcalendar/angular';
import { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  onClick(arg: EventClickArg) {
    console.log(arg);
  }

  onDateClick(args: DateClickArg) {
    console.log(args);
  }

  constructor() { }
  EVENTS: {}[] = [
    {
      title: "Déjeuner",
      start: '2021-05-31'
    }
  ];
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
    events: this.EVENTS,
    headerToolbar: {
      left: 'title',
      center: 'today',
      right: 'prev,next',
    },
  };

  ngOnInit(): void {
  }

}
