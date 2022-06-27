import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://myskillaround-spring-testing.herokuapp.com/api/postusuario/1';

  constructor(private http:HttpClient) {

    console.log(":_____SERVICIO Post___________")

   }

   getPost(){
      let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
      return this.http.get(this.url,{
        headers: header
      });
   }

}
