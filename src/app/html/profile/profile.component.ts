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

  btnEditar: boolean = true;
  btnGuardar: boolean = true;
  btnCancelar: boolean = true;

  //TODO: funcion de guardar datos

  ProfileUser!: usuarioModel;

  constructor() {}

  ngOnInit(): void {}

  botonesEdicion(): void {}

  btnEditFunction() {
    this.btnEditar = true;
    this.btnGuardar = false;
    this.btnCancelar = false;
  }

  div2Function() {
    this.btnGuardar = true;
    this.btnEditar = false;
    this.btnCancelar = false;
  }

  div3Function() {
    this.btnCancelar = true;
    this.btnGuardar = false;
    this.btnEditar = false;
  }
}
