import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Injecting authentification to navBar
  constructor(public authenticationService: AuthenticationService) {
    console.log("____________________________________________is autentificated: "+this.authenticationService.isAuthenticated);
  }

  ngOnInit(): void {
  }

    //Logout
    logout() {
      this.authenticationService.logout();
      //navigate to the login
      //this.router.navigate('')
    }

}
