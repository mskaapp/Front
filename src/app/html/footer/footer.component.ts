import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentification.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
  }

}
