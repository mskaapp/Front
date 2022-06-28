import { Component, OnInit, Input } from '@angular/core';
import { trabajoModel } from 'src/app/models/trabajoModel';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {

  @Input() workCardWork!: trabajoModel;
  url:   string="https://myskillaround-spring-testing.herokuapp.com/api/trabajo";

  constructor() { }

  ngOnInit(): void {
  }

  sendToWorkComponent(){
    localStorage.setItem('work', String(this.workCardWork.id));
    //console.log("CLICK::____________"+localStorage.getItem('work') )
  }
}
