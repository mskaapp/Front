import { Component, OnInit, Input } from '@angular/core';
import { postUsuarioModel } from 'src/app/models/postUsuarioModel';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() postCard:  postUsuarioModel;

  constructor() { }

  ngOnInit(): void {
  }

}
