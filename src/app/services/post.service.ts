import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://myskillaround-spring-testing.herokuapp.com/api/postusuario/1';

  constructor(private http:HttpClient) {

    console.log(":_____SERVICIO Post___________")

   }
   getPublicContent(): Observable<any> {
    return this.http.get(this.url + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.url + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.url + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.url + 'admin', { responseType: 'text' });
  }
   getPost(){
      let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
      return this.http.get(this.url,{
        headers: header
      });
   }
}
