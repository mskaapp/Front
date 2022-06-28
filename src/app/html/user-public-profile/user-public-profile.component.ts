import { Component, OnInit, Input } from '@angular/core';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-public-profile',
  templateUrl: './user-public-profile.component.html',
  styleUrls: ['./user-public-profile.component.css']
})
export class UserPublicProfileComponent implements OnInit {

  usuario!: usuarioModel;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getUserById();
  }

      //TODO: capture photo of user id
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
