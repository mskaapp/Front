import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { postUsuarioModel } from 'src/app/models/postUsuarioModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  screenWidth       = screen.width;
  screenHeight      = screen.height;
  usuario!:         usuarioModel;
  post!:            postUsuarioModel[];

  // pageActual: number = 1;
  screenSize() {
    //console.log(this.screenHeight);
  }

  ngOnInit(): void {
    this.screenSize();
    this.getPosts();
  }
  getUserById(){
    //TODO: capture the id from field html and sustitute for 1
    //this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/usuario/1').subscribe(
      console.log("_____________________LLAMADA DE USER_________________________________________")
    this.httpClient.get<any>('/api/usuario/1').subscribe(
      response =>{
        console.log(response);
        this.usuario=response;
      }
    );
  }
  getPosts(){
  //TODO: capture the id from field html and sustitute for user id
  //this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/postusuario/').subscribe(
  this.httpClient.get<any>('/api/postusuario/').subscribe(
    response =>{
      console.log(response);
      this.post=response;
    }
  );
  }
}
