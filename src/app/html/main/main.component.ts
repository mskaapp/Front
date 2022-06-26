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
    console.log(this.screenHeight);
  }

  ngOnInit(): void {
    this.screenSize();
  }
  getUserById(){
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<any>('http://localhost:8080/api/usuario/1').subscribe(
      response =>{
        console.log(response);
        this.usuario=response;
      }
    );
  }
  getPosts(){
  //TODO: capture the id from field html and sustitute for user id
  this.httpClient.get<any>('http://localhost:8080/api/postusuario/').subscribe(
    response =>{
      console.log(response);
      this.post=response;
    }
  );
  }
}
