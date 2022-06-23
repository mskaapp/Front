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

  constructor(private http: HttpClient,private router: Router) {
   /*this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", "Bearer"+ sessionStorage.getItem("token"));*/
  }

  public login(username: string, password: string) {
    this.http.post(LOGIN_URI,{username: username,password: password})
    .subscribe((resp: any) => {this.router.navigate(['profile']);
    const sesion = sessionStorage.setItem('auth_token', resp.token);
    console.log(resp.token);
    return sesion;
  });
}

  listarUsuarios(){
    sessionStorage.getItem('auth_token');
    return this.http.get('https://myskillaround-spring-testing.herokuapp.com/api/usuario');
  }

  getAll(): Observable<any>{
    return this.http.get(USUARIO_URI);
  }

}

