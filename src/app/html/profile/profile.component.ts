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

<<<<<<< HEAD
  usuario!: usuarioModel;

  constructor() {}

  ngOnInit(): void {}

  botonesEdicion(): void {
=======
  //TODO: funcion de guardar datos

  ProfileUser!: usuarioModel;

  constructor() { }
>>>>>>> cb7d0210eea983f11b9458b0a0c92e4c5769948d

  }
}
