import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentification.service';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from 'src/app/models/usuarioModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario!:     usuarioModel;

  //Injecting authentification to navBar
  constructor(public authenticationService: AuthenticationService, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

    //Logout
    logout() {
      this.authenticationService.logout();
      //navigate to the login
      //this.router.navigate('')
    }

    //TODO: capture photo of user id
    getUserById(){
      //TODO: capture the id from field html and sustitute for 1
      this.httpClient.get<any>('http://localhost:8080/api/usuario/1').subscribe(
        response =>{
          console.log(response);
          this.usuario=response;
        }
      );
    }
}
