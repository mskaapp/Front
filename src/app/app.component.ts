import { Component } from '@angular/core';

import { AuthenticationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Skill Around';

  constructor(public authenticationService: AuthenticationService) { }

  //Logout
  logout() {
    this.authenticationService.logout();
    //navigate to the login
    //this.router.navigate('')
  }
}
