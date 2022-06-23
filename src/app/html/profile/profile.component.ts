import { Component, OnInit } from '@angular/core';
import { usuarioModel } from 'src/app/models/usuarioModel';

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

  bolBtnEditar: boolean = true;
  bolBtnGuadar: boolean = false;
  bolBtnCancelar: boolean = false;

  //TODO: funcion de guardar datos

  ProfileUser!: usuarioModel;

  constructor() {}

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
}
