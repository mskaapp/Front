import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  txtUserCardUserName!:         string;
  uriUserCardPhoto!:            string;
  linkUserCardGithub!:          string;
  linkUserCardLinkedin!:        string;
  linkUserCardPinterest!:       string;
  linkUserCardAppStore!:        string;
  linkUserCardInstagram!:       string;

  //TODO: BUILD THE CONSTRUCTOR
  constructor() {

  }

  ngOnInit(): void {
  }

}
