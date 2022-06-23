import { Component, OnInit } from '@angular/core';
import { trabajoModel } from 'src/app/models/trabajoModel';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workTrabajo!: trabajoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
