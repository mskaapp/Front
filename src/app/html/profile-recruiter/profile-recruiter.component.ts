import { Component, OnInit } from '@angular/core';
import { reclutadorModel } from 'src/app/models/reclutadorModel';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from 'src/app/models/usuarioModel';

@Component({
  selector: 'app-profile-recruiter',
  templateUrl: './profile-recruiter.component.html',
  styleUrls: ['./profile-recruiter.component.css']
})
export class ProfileRecruiterComponent implements OnInit {

  profilerecruiterProfileR!: reclutadorModel;
  usuario!: usuarioModel;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  getUserById(){
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/usuario/1').subscribe(
      response =>{
        console.log(response);
        this.usuario=response;
      }
    );
  }
  getRecruiterById(){
    //TODO: capture the idrecruiter from usuario and substitute 1 for the id
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/reclutador/1').subscribe(
      response =>{
        console.log(response);
        this.profilerecruiterProfileR=response;
      }
    );
  }
}
