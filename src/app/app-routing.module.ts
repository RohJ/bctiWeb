import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { CounselingComponent } from './website/counseling/counseling.component';
import { CoursesComponent } from './website/courses/courses.component';

const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'about',         component: AboutComponent },
  { path: 'counseling',         component: CounselingComponent },
  { path: 'courses',         component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
