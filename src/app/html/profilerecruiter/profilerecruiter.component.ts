import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { reclutadorModel } from 'src/app/models/reclutadorModel';

@Component({
  selector: 'app-profilerecruiter',
  templateUrl: './profilerecruiter.component.html',
  styleUrls: ['./profilerecruiter.component.css']
})
export class ProfilerecruiterComponent implements OnInit {

  usuario!: usuarioModel;
  recruiter!: reclutadorModel;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  getUserById(){
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<any>('http://localhost:8080/api/usuario/1').subscribe(
      response =>{
        console.log(response);
        this.usuario=response;
      }
    );
  }
  getRecruiterById(){
    //TODO: capture the idrecruiter from usuario and substitute 1 for the id
    this.httpClient.get<any>('http://localhost:8080/api/reclutador/1').subscribe(
      response =>{
        console.log(response);
        this.recruiter=response;
      }
    );
  }
}
