import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { usuarioModel } from '../models/usuarioModel';

const LOGIN_URI = 'https://myskillaround-spring-testing.herokuapp.com/login';
const USUARIO_URI = 'https://myskillaround-spring-testing.herokuapp.com/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  /*headers = new Headers();*/

  constructor(private http: HttpClient) {
   /*this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", "Bearer"+ sessionStorage.getItem("token"));*/
  }

  /*public login(username: string, password: string) {
    this.http.post(LOGIN_URI,{username: username,password: password})
    .subscribe((resp: any) => {this.router.navigate(['profile']);
    const sesion = sessionStorage.setItem('auth_token', resp.token);
    console.log(resp.token);
    return sesion;
  });*/


  listarUsuarios(){
    return this.http.get('https://myskillaround-spring-testing.herokuapp.com/api/usuario');
    console.log(sessionStorage.getItem('token'));
  }

  getById(id: string) {
    return this.http.get(`https://myskillaround-spring-testing.herokuapp.com/api/usuario/${id}`);
  }

  add(data: any) {
    return this.http.post(`https://myskillaround-spring-testing.herokuapp.com/api/usuario`, data);
  }

  delete(id: any) {
    return this.http.delete(`${USUARIO_URI}/${id}`);
  }

  update(id: any, data: any) {
    return this.http.put(`${USUARIO_URI}/${id}`, data);
  }

}

