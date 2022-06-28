import { Component, OnInit, Input } from '@angular/core';
import { tecnicoModel } from 'src/app/models/tecnicoModel';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  //Retrieving info from Parent
  @Input() userCardTecnic:  tecnicoModel;
  @Input() userCardUsuario:  usuarioModel;

  url:   string="https://myskillaround-spring-testing.herokuapp.com/api/usuario";
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.getTecnico();
  }
  sendToPublicProfile(){
    localStorage.setItem('userPublic', String(this.userCardUsuario.id));
  }
  getTecnico(){
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/tecnico/'+this.userCardUsuario.tecnico).subscribe(
      response =>{
        console.log(response);
        this.userCardTecnic=response;
      }
    );
  }
}
