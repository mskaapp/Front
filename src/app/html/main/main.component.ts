import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  screenWidth = screen.width;
  screenHeight = screen.height;

  // pageActual: number = 1;
  screenSize() {
    console.log(this.screenHeight);
  }

  ngOnInit(): void {
    this.screenSize();
  }
}
