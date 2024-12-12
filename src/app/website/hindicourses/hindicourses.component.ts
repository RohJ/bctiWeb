import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hindicourses',
  templateUrl: './hindicourses.component.html',
  styleUrl: './hindicourses.component.scss'
})
export class HindicoursesComponent implements OnInit, OnDestroy {

  ngOnInit(): void {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');
  }

  ngOnDestroy() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');

  }

}
