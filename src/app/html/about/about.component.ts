import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo = ' Team 1 ';
  proyecto = ' MSKA - My Skill Around ';
  integrantes = ' David Dalmau, Ixabel Justo, Josep Oriol López, Octavio Bernal ';

  constructor() {
   }

  ngOnInit(): void {
  }

}
