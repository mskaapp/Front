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
  id!: number;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id= Number(localStorage.getItem('user'));
    //localStorage.getItem('user');
    this.getUserById();
  }

      //TODO: capture photo of user id
      getUserById(){
        //TODO: capture the id from field html and sustitute for 1
        this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/usuario/'+this.id).subscribe(
          response =>{
            console.log(response);
            this.usuario=response;
          }
        );
      }
}
