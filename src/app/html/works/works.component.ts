import { Component, OnInit } from '@angular/core';
import { trabajoModel } from 'src/app/models/trabajoModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  //TODO: controlar la discriminacion de busqueda de trabajos
  worksWork!:            trabajoModel;
  //Array of UserWorks
  arrayWorksTrabajos!:  trabajoModel[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //console.log("_____________OninitTrabajo TRABAJOS")
    this.getWorks();
  }

  getWorks(){
    console.log("_____________LEYENDO TRABAJOS")
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/trabajo').subscribe(
      response =>{
        //console.log(response);
        this.arrayWorksTrabajos=response;
      }
    );
  }

}
