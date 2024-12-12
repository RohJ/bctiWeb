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
import { IrhComponent } from './website/irh/irh.component';
import { HnhComponent } from './website/hnh/hnh.component';
import { MnpComponent } from './website/mnp/mnp.component';
import { CcefComponent } from './website/ccef/ccef.component';
import { HindicoursesComponent } from './website/hindicourses/hindicourses.component';
import { HpchindiComponent } from './website/hpchindi/hpchindi.component';
import { IrhhindiComponent } from './website/irhhindi/irhhindi.component';
import { HnhhindiComponent } from './website/hnhhindi/hnhhindi.component';
import { MnphindiComponent } from './website/mnphindi/mnphindi.component';

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
  { path: 'irh',         component: IrhComponent },
  { path: 'hnh',         component: HnhComponent },
  { path: 'mnp',         component: MnpComponent },
  { path: 'ccef-bcti',         component: CcefComponent },
  { path: 'hindi-courses',         component: HindicoursesComponent },
  { path: 'hpchindi',         component: HpchindiComponent },
  { path: 'irhhindi',         component: IrhhindiComponent },
  { path: 'hnhhindi',         component: HnhhindiComponent },
  { path: 'mnphindi',         component: MnphindiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
