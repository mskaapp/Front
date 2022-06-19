import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  //Example to send info to the child as a single propierty
  //Should recive and array of objects
  txtUserCardUserName:         string='uri';
  constructor() { }
  ngOnInit(): void {
  }

}
