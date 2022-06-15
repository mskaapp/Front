import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { NavbarComponent }              from './navbar/navbar.component';
import { LoginComponent }               from './login/login.component';
import { MainComponent }                from './main/main.component';
import { AboutComponent }               from './about/about.component';
import { CalendarComponent }            from './calendar/calendar.component';
import { ProfileComponent }             from './profile/profile.component';
import { ProfilerecruiterComponent }    from './profilerecruiter/profilerecruiter.component';
//Borrar
//import { ProfileRecruiterComponent }    from './profile-recruiter/profile-recruiter.component';
//import { ProfileTecnicComponent }       from './profile-tecnic/profile-tecnic.component';
//Up Borrar
import { RegisterComponent }            from './register/register.component';
import { RegisterRecruiterComponent }   from './register-recruiter/register-recruiter.component';
import { RegisterTecnicComponent }      from './register-tecnic/register-tecnic.component';
import { WorksComponent }               from './works/works.component';

import { AuthGuard }                    from './guards/auth.guard';

//if its with canActivate : [AuthGuard], means that only can access if the user its logged in
const routes: Routes = [
  //Out of security
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //Inside Security
  {path: 'navbar',            component: NavbarComponent,             canActivate : [AuthGuard]},
  {path: 'main',              component: MainComponent,               canActivate : [AuthGuard]},
  {path: 'about',             component: AboutComponent,              canActivate : [AuthGuard]},
  {path: 'calendar',          component: CalendarComponent,           canActivate : [AuthGuard]},
  {path: 'profile',           component: ProfileComponent,            canActivate : [AuthGuard]},
  {path: 'registerRecruiter', component: ProfilerecruiterComponent,   canActivate : [AuthGuard]},
  {path: 'registerRecruiter', component: RegisterRecruiterComponent,  canActivate : [AuthGuard]},
  {path: 'registerTecnic',    component: RegisterTecnicComponent,     canActivate : [AuthGuard]},
  {path: 'works',             component: WorksComponent,              canActivate : [AuthGuard]},
  //Borrar down
  //{path: 'profileRecruiter',  component: ProfileRecruiterComponent,   canActivate : [AuthGuard]},
  //{path: 'profileTecnic',     component: ProfileTecnicComponent,      canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
