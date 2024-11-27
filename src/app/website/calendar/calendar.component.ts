import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})

export class CalendarComponent implements OnInit, OnDestroy {


  ngOnInit(): void {


    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');

  }

  ngOnDestroy() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');

  }

}
