import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { ReactiveFormsModule }  from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './website/shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './website/home/home.component';
import { FooterComponent } from "./website/shared/footer/footer.component";
import { AboutComponent } from './website/about/about.component';
import { CounselingComponent } from './website/counseling/counseling.component';
import { CoursesComponent } from './website/courses/courses.component';
import { CalendarComponent } from './website/calendar/calendar.component';
import { ContactComponent } from './website/contact/contact.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EngcoursesComponent } from './website/engcourses/engcourses.component';
import { HpcComponent } from './website/hpc/hpc.component';
import { IrhComponent } from './website/irh/irh.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CounselingComponent,
    CoursesComponent,
    CalendarComponent,
    ContactComponent,
    EngcoursesComponent,
    HpcComponent,
    IrhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
