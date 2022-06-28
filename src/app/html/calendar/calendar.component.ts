import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//Para el formato espanyol
import esLocale from '@fullcalendar/core/locales/es';
import { trabajoModel } from 'src/app/models/trabajoModel';
import { HttpClient } from '@angular/common/http';
import { eventCalendarModel } from 'src/app/models/eventCalendarModel';

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
    //this.getTrabajos();
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
    /*this.getTrabajos()
    Promise.all([
      this.getTrabajos(),
      this.setTrabajosToEvents(),
    ]);*/
    //this.setTrabajosToEvents();
    //console.log("_______________events____________________")
    //console.log(this.events);
    console.log("DATE FORMAT: ___________"+ new Date());
    this.events =[
      {
        title: "Trabajo 1",
        start: new Date(),
        description: "Primer Sprint"
      },
      {
        title: "Trabajo 2",
        start: new Date().getTime()+8640000,
        end: new Date().getTime()+(8640000*4),
        description: "Segundo Sprint"
      },
      {
        color: 'green',
        title: "Elon Musk",
        start: new Date("Tue Jun 1 2022 14:30:00"),
        end: new Date("Tue Jun 1 2022 15:00:06"),
        description: "Entrevista con Elon Musk"
      },
      {
        title: "Trabajo de machaca informatico",
        start: new Date("Tue Jun 7 2022 14:30:00"),
        end: new Date("Tue Jun 12 2022 15:00:06"),
        description: "Instalar el chrome en 3 ordenadores"
      },
      {
        color: 'green',
        title: "Julio Iglesias",
        start: new Date("Tue Jun 9 2022 11:30:00"),
        description: "Entrevista con Julio Iglesias"
      },
      {
        color: 'red',
        title: "Informe Proyecto",
        start: new Date("Tue Jun 17 2022 11:30:00"),
        description: "Informe de estado del proyecto Albañil tecnológico"
      },
      {
        title: "Albañil tecnológico",
        start: new Date("Tue Jun 10 2022 14:30:00"),
        end: new Date("Tue Jun 19 2022 15:00:06"),
        description: "App para Mercadona"
      },

    ]
  }
  getTrabajos(){
    //TODO: using the user id capture all works
  this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/trabajo').subscribe(
    response =>{
      console.log("_______________trabajos calendar____________________")
      console.log(response);
      this.arrayCalendarTrabajos=response;
    }
  );
  this.setTrabajosToEvents();
  console.log("_______________events____________________")
    console.log("events___"+ this.events.length)
    console.log(this.events);
  }

  setTrabajosToEvents(){
    console.log("_______________for____________________")
    for(let i=0; i<this.arrayCalendarTrabajos.length;i++){
      let event: eventCalendarModel;
      event.title=this.arrayCalendarTrabajos[i].descripcion;
      event.start=this.arrayCalendarTrabajos[i].fecha_ini;
      event.fin= this.arrayCalendarTrabajos[i].fecha_fin;
      this.events.push(event);
    }

  }
}

