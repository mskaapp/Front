import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  //Retrieving info from Parent
  @Input() txtUserCardUserName!:         string;
  @Input() uriUserCardPhoto!:            string;
  @Input() linkUserCardGithub!:          string;
  @Input() linkUserCardLinkedin!:        string;
  @Input() linkUserCardPinterest!:       string;
  @Input() linkUserCardAppStore!:        string;
  @Input() linkUserCardInstagram!:       string;

  //TODO: BUILD THE CONSTRUCTOR
  constructor() { }

  ngOnInit(): void {
  }

}
