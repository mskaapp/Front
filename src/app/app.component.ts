import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

import { AuthenticationService } from './services/authentification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'admin1';
  password = 'password';

  title = 'My Skill Around';

  constructor(private usuarioService: UsuarioService) {
    console.log('El componente se a creado')
    this.usuarioService.login(this.username, this.password);
    this.usuarioService.findAllUsers().subscribe(response => console.log(response));
  }


   ngOnInit(): void{
    console.log('El componente se ha inicializado');
    console.log(localStorage.getItem('auth_token'));
   }

  }
