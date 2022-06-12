import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { AuthGuard } from './guards/auth.guard';

//if its with canActivate : [AuthGuard], means that only can access if the user its logged in
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent,canActivate : [AuthGuard]},
  {path: 'main', component: MainComponent, canActivate : [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
