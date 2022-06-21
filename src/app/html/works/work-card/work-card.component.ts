import { Component, OnInit, Input } from '@angular/core';
import { trabajoModel } from 'src/app/models/trabajoModel';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {

  @Input() workCardWork!: trabajoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
