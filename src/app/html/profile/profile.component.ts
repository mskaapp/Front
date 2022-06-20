import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Hola');
    console.log(sessionStorage.getItem('auth_token'));
    console.log('chao');

  }

}
