import { Component, OnInit } from '@angular/core';
import { usuarioModel } from 'src/app/models/usuarioModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //TODO: funcion de guardar datos

  ProfileUser!: usuarioModel;

  constructor() { }

  ngOnInit(): void {
  }

}
