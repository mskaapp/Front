import { Component, OnInit } from '@angular/core';
import { reclutadorModel } from 'src/app/models/reclutadorModel';

@Component({
  selector: 'app-profile-recruiter',
  templateUrl: './profile-recruiter.component.html',
  styleUrls: ['./profile-recruiter.component.css']
})
export class ProfileRecruiterComponent implements OnInit {

  profilerecruiterProfileR!: reclutadorModel;

  constructor() { }

  ngOnInit(): void {
  }

}
