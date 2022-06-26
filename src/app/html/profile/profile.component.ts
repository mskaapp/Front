import { Component, OnInit } from '@angular/core';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  nombre: any;
  apellidos: any;
  fechaDeNacimiento: any;
  userName: any;

  usuario!:     usuarioModel;

  bolBtnEditar: boolean = true;
  bolBtnGuadar: boolean = false;
  bolBtnCancelar: boolean = false;

  //TODO: funcion de guardar datos

  ProfileUser!: usuarioModel;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

  }

  botonesEdicion(): void {}

  showGuardarCancelar() {
    this.bolBtnEditar   = false;
    this.bolBtnGuadar   = true;
    this.bolBtnCancelar = true;
  }

  hideGuardarCancelar() {
    this.bolBtnEditar   = true;
    this.bolBtnGuadar   = false;
    this.bolBtnCancelar = false;
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
}
