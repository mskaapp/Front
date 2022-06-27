import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentification.service';
import { SignInData } from '../../models/signInData';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { postUsuarioModel } from 'src/app/models/postUsuarioModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
  chRememberMe!:    boolean;
  tfUser!:          string;
  tfPassword!:      string;
  usuario!:         usuarioModel;
  post!:            postUsuarioModel;

  constructor(private authenticationService: AuthenticationService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUserById();
    this.getPostbyid();
    //LocalStorage cant storage booleans, the string must be parsed
    if(localStorage.getItem('checked')=='true'){
      //Setting checkbox checked and values from localStorage
      this.chRememberMe   = true;
      this.tfUser         = localStorage.getItem('user');
      this.tfPassword     = localStorage.getItem('password');

    }else{
      //Setting checkbox unchecked
      this.chRememberMe = false;
    }
  }

  //TODO: Save user id on sessionStorage to use during all session
  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);

  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
  //For remember user and password
  // add usuario: string, password:string
  public changestatusRemember(){
    if(this.chRememberMe == true){
      localStorage.setItem('checked', 'true');
      localStorage.setItem('user', this.tfUser );
      localStorage.setItem('password', this.tfPassword);
    }else{
      localStorage.setItem('checked', 'false');
      localStorage.setItem('user', '' );
      localStorage.setItem('password', '');
    }
  }
  getUserById(){
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/usuario/1').subscribe(
      response =>{
        console.log(response);
        this.usuario=response;
      }
    );
  }
  getPostbyid(){
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/postusuario/1').subscribe(
      response =>{
        console.log(response);
        this.post=response;
      }
    );
  }
}
