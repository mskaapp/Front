import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentification.service';
import { SignInData } from '../models/signInData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
  chRememberMe!:  boolean;
  tfUser!:        string;
  tfPassword!:     string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log("Estatus check local"+localStorage.getItem('checked'));
    console.log("Estatus check"+localStorage.getItem('checked'));
    //LocalStorage cant storage booleans, the string must be parsed
    if(localStorage.getItem('checked')=='true'){
      //Setting checkbox checked
      this.chRememberMe   = true;
      this.tfUser         = localStorage.getItem('user');
      this.tfPassword     = localStorage.getItem('password');

      //TODO: ser values of textfield from localstorage
    }else{
      //Setting checkbox unchecked
      this.chRememberMe = false;
    }
  }


  onSubmit(signInForm: NgForm) {
    //console.log(signInForm.value);
    //console.log(signInForm.valid);
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
    console.log("changed");
  }
}
