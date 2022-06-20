import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  uri = 'https://myskillaround-spring-testing.herokuapp.com/login';
  token;

  constructor(private http: HttpClient,private router: Router) { }

  login(username: string, password: string) {
    this.http.post(this.uri,{username: username,password: password})
    .subscribe((resp: any) => {this.router.navigate(['profile']);
    sessionStorage.setItem('auth_token', resp.token);

    console.log(resp.token);
  });
}

  public get logIn(): boolean {return (sessionStorage.getItem('token') !== null);}
  getUsers(): any{
    return this.http.get('https://myskillaround-spring-testing.herokuapp.com/api/usuario');

    sessionStorage.getItem('auth_token');
  }
}
