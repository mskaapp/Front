import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './html/about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileTecnicComponent } from './profile-tecnic/profile-tecnic.component';
import { ProfileRecruiterComponent } from './profile-recruiter/profile-recruiter.component';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';
import { RegisterTecnicComponent } from './register-tecnic/register-tecnic.component';
import { WorksComponent } from './works/works.component';
import { ConfigPageComponent } from './config-page/config-page.component';
import { CalendarComponent } from './html/calendar/calendar.component';

import { FullCalendarModule } from 'primeng/fullcalendar';
import { ProfilerecruiterComponent } from './profilerecruiter/profilerecruiter.component';

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
