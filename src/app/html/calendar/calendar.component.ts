import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//Para el formato espanyol
import esLocale from '@fullcalendar/core/locales/es';
import { trabajoModel } from 'src/app/models/trabajoModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  //Array Trabajos
  arrayCalendarTrabajos!: trabajoModel[];


  public events!: any[];
  public options : any;

  constructor(private httpClient: HttpClient) { }

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
    //TODO: Sustituir por el array recibido de trabajos
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
  getTrabajos(){
    //TODO: using the user id capture all works
  this.httpClient.get<any>('http://localhost:8080/api/trabajo').subscribe(
    response =>{
      console.log(response);
      this.arrayCalendarTrabajos=response;
    }
  );
  }
}

