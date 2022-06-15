import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileTecnicComponent } from './profile-tecnic/profile-tecnic.component';
import { ProfileRecruiterComponent } from './profile-recruiter/profile-recruiter.component';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';
import { RegisterTecnicComponent } from './register-tecnic/register-tecnic.component';
import { WorksComponent } from './works/works.component';
import { ConfigPageComponent } from './config-page/config-page.component';
import { CalendarComponent } from './calendar/calendar.component';

import { FullCalendarModule } from 'primeng/fullcalendar';
import { ProfilerecruiterComponent } from './profilerecruiter/profilerecruiter.component';

import { BoardUserComponent } from './board-user/board-user.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    BoardUserComponent,
    LoginComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
