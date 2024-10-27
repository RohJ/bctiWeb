import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { ReactiveFormsModule }  from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './website/shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './website/home/home.component';
import { FooterComponent } from "./website/shared/footer/footer.component";
import { AboutComponent } from './website/about/about.component';
import { CounselingComponent } from './website/counseling/counseling.component';
import { CoursesComponent } from './website/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CounselingComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
