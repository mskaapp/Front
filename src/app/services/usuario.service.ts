import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { usuarioModel } from '../models/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  uri = 'https://myskillaround-spring-testing.herokuapp.com/login';
  uriUsuario;
  token;


  constructor(private http: HttpClient,private router: Router) { }

  public login(username: string, password: string) {
    this.http.post(this.uri,{username: username,password: password})
    .subscribe((resp: any) => {this.router.navigate(['profile']);
    const sesion = sessionStorage.setItem('auth_token', resp.token);
    console.log(resp.token);
    return sesion;
  });
}

  findAllUsers(): Observable<usuarioModel[]>{
    this.uriUsuario = 'https://myskillaround-spring-testing.herokuapp.com/api/usuario';
    return this.http.get<usuarioModel[]>(`${this.uriUsuario}`);
  }
}

