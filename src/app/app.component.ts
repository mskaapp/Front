import { Component } from '@angular/core';

import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Skill Around';

  private roles: string [] = [];

  isLogedIn = false;
  showUserBoard = false;
  username?: string;

  constructor(public TokenStorageService: TokenStorageService) { }

  ngOnInit(): void{
    this.isLogedIn = !! this.TokenStorageService.getToken();

    if(this.isLogedIn){
      const USER = this.TokenStorageService.getUser();
      this.roles = USER.roles;

      this.showUserBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = USER.username;

    }
}

logout(): void{
  this.TokenStorageService.signOut();
  window.location.reload();
}
}
