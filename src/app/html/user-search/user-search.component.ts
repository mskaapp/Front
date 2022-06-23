import { Component, OnInit } from '@angular/core';
import { tecnicoModel } from 'src/app/models/tecnicoModel';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  //Example to send info to the child as a single propierty
  //TODO: controlar el campo de busqueda para discriminar la busqueda de usuarios
  userSearchTecnic:         tecnicoModel;
  arrayUserSearchUser!:     usuarioModel[];
  arrayUserSearchTecnic!:   tecnicoModel[];

  //TODO: borrar down
  txtUserCardUserName:         string='uri';
  //Example who to pass a link
  linkTest: string='https:www.google.com';
  constructor() { }
  ngOnInit(): void {
    this.recorrerUsuarios();
  }
  //TODO: recorrer usuarios y comprobar si es técnico y agregar a array de técnicos
  recorrerUsuarios(){
      /*for(let i of arrayTest){
        if(i.fkTecnic!=null){

        }
      }*/
  }
}
