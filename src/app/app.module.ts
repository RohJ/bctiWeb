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
import { HnhComponent } from './website/hnh/hnh.component';
import { MnpComponent } from './website/mnp/mnp.component';
import { CcefComponent } from './website/ccef/ccef.component';
import { HindicoursesComponent } from './website/hindicourses/hindicourses.component';
import { HpchindiComponent } from './website/hpchindi/hpchindi.component';
import { IrhhindiComponent } from './website/irhhindi/irhhindi.component';
import { HnhhindiComponent } from './website/hnhhindi/hnhhindi.component';
import { MnphindiComponent } from './website/mnphindi/mnphindi.component';


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
    IrhComponent,
    HnhComponent,
    MnpComponent,
    CcefComponent,
    HindicoursesComponent,
    HpchindiComponent,
    IrhhindiComponent,
    HnhhindiComponent,
    MnphindiComponent
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
