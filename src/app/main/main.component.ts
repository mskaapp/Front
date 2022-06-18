import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  hideText;
  btnHideText;

  constructor() {}

  ngOnInit(): void {}

  toggleText() {
    this.hideText.classList.toggle('show');
  }
}
