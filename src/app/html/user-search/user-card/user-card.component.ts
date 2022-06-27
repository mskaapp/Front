import { Component, OnInit, Input } from '@angular/core';
import { tecnicoModel } from 'src/app/models/tecnicoModel';
import { usuarioModel } from 'src/app/models/usuarioModel';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  //Retrieving info from Parent
  @Input() userCardTecnic:  tecnicoModel;
  @Input() userCardUsuario:  usuarioModel;



  constructor() { }

  ngOnInit(): void {

  }

}
