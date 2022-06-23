import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const baseUrl = 'https://myskillaround-spring-testing.herokuapp.com/login';

export interface User {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: any = 'token inicial';
  submitted = false;
  private user: any;
  private user$: Subject<any>; // Subject que emite información a componentes

  constructor(private http: HttpClient) {
    this.user$ = new Subject();
  }

  ngOnInit(): void {
      const data = {
        username: 'admin1',
        password: 'password',
      };

      this.signup(data)
        .subscribe(
          response => {
            this.token = response;
            this.submitted = true;
            console.log(response);
            window.sessionStorage.setItem("auth-token", this.token.token);
            window.sessionStorage.setItem("auth-username", 'admin1');
          },
          error => {
            console.log(error);
          });

    }


  signup(data: any) {
    console.log(data);
    this.user = data;
    this.user$.next(this.user);
    return this.http.post(`${baseUrl}`, data);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}/users/${name}`);
  }

  add(data: any) {
    return this.http.post(`${baseUrl}/users/`, data);
  }

  // updateUser(user: any){
  //   this.user = user;
  //   this.user$.next(this.user);
  // }

  getUser$(): Observable<any>{
    return this.user$.asObservable();
  }

}
