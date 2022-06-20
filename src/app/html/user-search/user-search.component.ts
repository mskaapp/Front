import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  //Example to send info to the child as a single propierty
  //Should recive and array of objects
  txtUserCardUserName:         string='uri';
  //Example who to pass a link
  linkTest: string='https:www.google.com';
  constructor() { }
  ngOnInit(): void {
  }
}