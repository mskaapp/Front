import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

import { AuthenticationService } from './services/authentification.service';
import { Observable } from 'rxjs';
import { ReclutadorService } from './services/reclutador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'admin1';
  password = 'password';

  title = 'My Skill Around';

  constructor(private usuarioService: UsuarioService, private reclutadorService: ReclutadorService) {
    console.log('El componente se a creado')
    //this.usuarioService.login(this.username, this.password);
    this.usuarioService.listarUsuarios().subscribe(response => console.log(response));
    this.usuarioService.getById('1').subscribe(response => console.log(response));
    this.reclutadorService.listarUsuarios().subscribe(response => console.log(response));
    this.reclutadorService.getById('1').subscribe(response => console.log(response));
  }


   ngOnInit(): void{
    console.log('El componente se ha inicializado');
    // No llega el token
    console.log(localStorage.getItem('auth_token'));
   }

  }
