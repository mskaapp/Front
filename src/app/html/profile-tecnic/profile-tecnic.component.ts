import { Component, OnInit } from '@angular/core';
import { tecnicoModel } from 'src/app/models/tecnicoModel';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from 'src/app/models/usuarioModel';

@Component({
  selector: 'app-profile-tecnic',
  templateUrl: './profile-tecnic.component.html',
  styleUrls: ['./profile-tecnic.component.css']
})
export class ProfileTecnicComponent implements OnInit {

  profileTecnicProfileT!: tecnicoModel;
  usuario!:  usuarioModel;

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
  getTecnicById(){
    //TODO: capture the idrtefrom usuario and substitute 1 for the id
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/tecnico/1').subscribe(
      response =>{
        console.log(response);
        this.profileTecnicProfileT=response;
      }
    );
  }
}
