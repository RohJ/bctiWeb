import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';

var glide = new Glide('.text_testimony', {
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
  }
}
