import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { CounselingComponent } from './website/counseling/counseling.component';
import { CoursesComponent } from './website/courses/courses.component';
import { CalendarComponent } from './website/calendar/calendar.component';
import { ContactComponent } from './website/contact/contact.component';
import { AlumniComponent } from './website/participate/alumni/alumni.component';
import { EngcoursesComponent } from './website/engcourses/engcourses.component';
import { HpcComponent } from './website/hpc/hpc.component';

const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'about',         component: AboutComponent },
  { path: 'counseling',         component: CounselingComponent },
  { path: 'courses',         component: CoursesComponent },
  { path: 'calendar',         component: CalendarComponent },
  { path: 'contact',         component: ContactComponent },
  { path: 'alumni',         component: AlumniComponent },
  { path: 'engcourses',         component: EngcoursesComponent },
  { path: 'hpc',         component: HpcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
