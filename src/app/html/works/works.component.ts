import { Component, OnInit } from '@angular/core';
import { trabajoModel } from 'src/app/models/trabajoModel';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  //TODO: controlar la discriminacion de busqueda de trabajos
  worksWork!:            trabajoModel;
  //Array of UserWorks
  arrayWorksTrabajos!:  trabajoModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
