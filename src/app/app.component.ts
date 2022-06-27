import { Component } from '@angular/core';

import { AuthenticationService } from './services/authentification.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Skill Around';

  constructor(
    public authenticationService: AuthenticationService,
    private postService:PostService
    ) {
      this.postService.getPost().subscribe(resp =>{
        console.log(resp)
      });
     }

  //Logout
  logout() {
    this.authenticationService.logout();
    //navigate to the login
    //this.router.navigate('')
  }
}
