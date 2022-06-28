import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-tecnic',
  templateUrl: './register-tecnic.component.html',
  styleUrls: ['./register-tecnic.component.css']
})
export class RegisterTecnicComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
