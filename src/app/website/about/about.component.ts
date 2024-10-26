import { Component, OnInit, OnDestroy } from '@angular/core';
import Glide from '@glidejs/glide';

var glide1 = new Glide('.Story', {
  type: 'carousel',
  hoverpause: true,
  autoplay: 4000,
  perView: 1
})

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    glide1.mount();

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');

  }

  ngOnDestroy() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');

  }

}
