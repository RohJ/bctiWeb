import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-engcourses',
  templateUrl: './engcourses.component.html',
  styleUrl: './engcourses.component.scss'
})
export class EngcoursesComponent implements OnInit, OnDestroy {

  ngOnInit(): void {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');
  }

  ngOnDestroy() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');

  }
}
