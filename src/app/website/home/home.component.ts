import { Component, OnInit, OnDestroy } from '@angular/core';
import Glide from '@glidejs/glide';

var glide = new Glide('.text_testimony', {
  type: 'carousel',
  hoverpause: true,
  autoplay: 4000,
  perView: 1
})

var glide1 = new Glide('.Counseling', {
  type: 'carousel',
  hoverpause: true,
  autoplay: 4000,
  perView: 1
})

var glide2 = new Glide('.Training', {
  type: 'carousel',
  hoverpause: true,
  autoplay: 4000,
  perView: 1
})

var glide3 = new Glide('.Courses', {
  type: 'carousel',
  hoverpause: true,
  autoplay: 4000,
  perView: 1
})


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {

  ngOnInit(): void {
    glide.mount();
    glide1.mount();
    glide2.mount();
    glide3.mount();

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');
  }

}
