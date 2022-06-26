import { Component, OnInit } from '@angular/core';
import { trabajoModel } from 'src/app/models/trabajoModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workTrabajo!: trabajoModel;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  getWorks(){
    //TODO: get idRecruiter from sessionStorage and inject it in the sentence
    //TODO: capture the idrecruiter from usuario and substitute 1 for the id
    this.httpClient.get<any>('http://localhost:8080/api/reclutador/1').subscribe(
      response =>{
        console.log(response);
        this.workTrabajo=response;
      }
    );
  }
}
