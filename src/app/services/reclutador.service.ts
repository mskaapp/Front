import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclutadorService {

constructor(private http: HttpClient) { }

listarUsuarios(){
  return this.http.get('https://myskillaround-spring-testing.herokuapp.com/api/reclutador');
}

getById(id: string) {
  return this.http.get(`https://myskillaround-spring-testing.herokuapp.com/api/reclutador/${id}`);
}
}
