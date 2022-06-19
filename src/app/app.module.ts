import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './html/navbar/navbar.component';
import { LoginComponent } from './html/login/login.component';
import { MainComponent } from './html/main/main.component';
import { RegisterComponent } from './html/register/register.component';
import { AboutComponent } from './html/about/about.component';
import { ProfileComponent } from './html/profile/profile.component';
import { ProfileTecnicComponent } from './html/profile-tecnic/profile-tecnic.component';
import { ProfileRecruiterComponent } from './html/profile-recruiter/profile-recruiter.component';
import { RegisterRecruiterComponent } from './html/register-recruiter/register-recruiter.component';
import { RegisterTecnicComponent } from './html/register-tecnic/register-tecnic.component';
import { WorksComponent } from './html/works/works.component';
import { ConfigPageComponent } from './html/config-page/config-page.component';
import { CalendarComponent } from './html/calendar/calendar.component';

import { FullCalendarModule } from 'primeng/fullcalendar';
import { ProfilerecruiterComponent } from './html/profilerecruiter/profilerecruiter.component';
import { UserSearchComponent } from './html/user-search/user-search.component';
import { UserCardComponent } from './html/user-card/user-card.component';
import { UserPublicProfileComponent } from './html/user-public-profile/user-public-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    AboutComponent,
    ProfileComponent,
    ProfileTecnicComponent,
    ProfileRecruiterComponent,
    RegisterRecruiterComponent,
    RegisterTecnicComponent,
    WorksComponent,
    ConfigPageComponent,
    CalendarComponent,
    ProfilerecruiterComponent,
    UserSearchComponent,
    UserCardComponent,
    UserPublicProfileComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
