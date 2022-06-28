import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tecnicoModel } from 'src/app/models/tecnicoModel';

@Component({
  selector: 'app-register-recruiter',
  templateUrl: './register-recruiter.component.html',
  styleUrls: ['./register-recruiter.component.css']
})
export class RegisterRecruiterComponent implements OnInit {

  tecnico!: tecnicoModel;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getRecruiterById();
  }

  getRecruiterById(){
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<tecnicoModel>('https://myskillaround-spring-testing.herokuapp.com/api/tecnico/1').subscribe(
      response =>{
        console.log(response);
        this.tecnico=response;
      }
    );
  }
}
