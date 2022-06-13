import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//Para el formato espanyol
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public events!: any[];
  public options : any;

  constructor() { }

  ngOnInit() {

    this.options ={
      plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin],
      defaulDate: new Date,
      locale: esLocale,
      header : {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      //No editable because the jobs will come from the database
      editable: false
    }
    //Insert Date from database
    //Evento de muestra
    //TODO: Borrar
    this.events =[
      {
        title: "Sprint 1",
        start: new Date(),
        description: "Primer Sprint"
      },
      {
        title: "Sprint 2",
        start: new Date().getTime()+8640000,
        end: new Date().getTime()+(8640000*4),
        description: "Segundo Sprint"
      }
    ]
  }

}

