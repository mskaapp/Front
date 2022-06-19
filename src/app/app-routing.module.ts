import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { NavbarComponent }              from './html/navbar/navbar.component';
import { LoginComponent }               from './html/login/login.component';
import { MainComponent }                from './html/main/main.component';
import { AboutComponent }               from './html/about/about.component';
import { CalendarComponent }            from './html/calendar/calendar.component';
import { ProfileComponent }             from './html/profile/profile.component';
import { ProfilerecruiterComponent }    from './html/profilerecruiter/profilerecruiter.component';
import { UserSearchComponent }          from './html/user-search/user-search.component';
//Child userSearch
import { UserCardComponent }            from './html/user-search/user-card/user-card.component';
import { ProfileRecruiterComponent }    from './html/profile-recruiter/profile-recruiter.component';
import { ProfileTecnicComponent }       from './html/profile-tecnic/profile-tecnic.component';
import { RegisterComponent }            from './html/register/register.component';
import { RegisterRecruiterComponent }   from './html/register-recruiter/register-recruiter.component';
import { RegisterTecnicComponent }      from './html/register-tecnic/register-tecnic.component';
import { WorksComponent }               from './html/works/works.component';
import { WorkCardComponent }            from './html/works/work-card/work-card.component';
import { WorkComponent }                from './html/work/work.component';
import { UserPublicProfileComponent }   from './html/user-public-profile/user-public-profile.component';




//Security
import { AuthGuard }                    from './guards/auth.guard';

//if its with canActivate : [AuthGuard], means that only can access if the user its logged in
const routes: Routes = [
  //Out of security
  {path: '',                  component: LoginComponent},
  {path: 'register',          component: RegisterComponent},
  //Duplicated for the function of cancel register
  {path: 'login',             component: LoginComponent},
  //Inside Security
  {path: 'navbar',              component: NavbarComponent,             canActivate : [AuthGuard]},
  {path: 'main',                component: MainComponent,               canActivate : [AuthGuard]},
  {path: 'about',               component: AboutComponent,              canActivate : [AuthGuard]},
  {path: 'calendar',            component: CalendarComponent,           canActivate : [AuthGuard]},
  {path: 'profile',             component: ProfileComponent,            canActivate : [AuthGuard]},
  {path: 'profilerecruiter',    component: ProfilerecruiterComponent,   canActivate : [AuthGuard]},
  {path: 'registerRecruiter',   component: RegisterRecruiterComponent,  canActivate : [AuthGuard]},
  {path: 'registerTecnic',      component: RegisterTecnicComponent,     canActivate : [AuthGuard]},
  {path: 'works',               component: WorksComponent,              canActivate : [AuthGuard]},
  {path: 'work-card',           component: WorkCardComponent,           canActivate : [AuthGuard]},
  {path: 'work',                component: WorkComponent,               canActivate : [AuthGuard]},
  {path: 'user-search',         component: UserSearchComponent,         canActivate : [AuthGuard]},
  {path: 'user-card',           component: UserCardComponent,           canActivate : [AuthGuard]},
  {path: 'profileRecruiter',    component: ProfileRecruiterComponent,   canActivate : [AuthGuard]},
  {path: 'profileTecnic',       component: ProfileTecnicComponent,      canActivate : [AuthGuard]},
  {path: 'user-public-profile', component: UserPublicProfileComponent,  canActivate : [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
