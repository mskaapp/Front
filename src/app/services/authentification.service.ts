import { Injectable } from '@angular/core';
import { SignInData } from '../models/signInData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //Fake user, only for testing
  //TODO: erase when all back end been connected
  private readonly mockUser: SignInData = new SignInData('uri', 'uri');

  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['main']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  //TODO: connection with our backend
  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword());
  }

  //TODO: change for real user
  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }
  //TODO: change for real user
  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  //Check if user is authentificated
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  ///////////////////////////////////////////////////////////////////////////////////
}
