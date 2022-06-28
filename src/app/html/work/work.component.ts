import { Component, OnInit } from '@angular/core';
import { trabajoModel } from 'src/app/models/trabajoModel';
import { reclutadorModel } from 'src/app/models/reclutadorModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workTrabajo!: trabajoModel;
  reclutador!: reclutadorModel;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getWorks();
  }

  getWorks(){
    //TODO: get idRecruiter from sessionStorage and inject it in the sentence
    //TODO: capture the idrecruiter from usuario and substitute 1 for the id
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/trabajo/1').subscribe(

      response =>{
        console.log(response);
        this.workTrabajo=response;
      }
    );
  }

}
