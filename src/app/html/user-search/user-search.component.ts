import { Component, OnInit } from '@angular/core';
import { tecnicoModel } from 'src/app/models/tecnicoModel';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpClient } from '@angular/common/http';

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
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.getTecnics()
  }
      //TODO: capture photo of user id
      getTecnics(){
        //TODO: capture the id from field html and sustitute for 1
        this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/tecnico/').subscribe(
          response =>{
            console.log(response);
            this.arrayUserSearchTecnic=response;
          }
        );
      }
      get
}
