import { Component, OnInit } from '@angular/core';
import { tecnicoModel } from 'src/app/models/tecnicoModel';

@Component({
  selector: 'app-profile-tecnic',
  templateUrl: './profile-tecnic.component.html',
  styleUrls: ['./profile-tecnic.component.css']
})
export class ProfileTecnicComponent implements OnInit {

  profileTecnicProfileT!: tecnicoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
