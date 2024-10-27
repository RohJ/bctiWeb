import { Component, OnInit, OnDestroy } from '@angular/core';
import Glide from '@glidejs/glide';

var glide5 = new Glide('.Coaching', {
  type: 'carousel',
  hoverpause: true,
  autoplay: 4000,
  perView: 1
})

@Component({
  selector: 'app-counseling',
  templateUrl: './counseling.component.html',
  styleUrl: './counseling.component.scss'
})
export class CounselingComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    glide5.mount();

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');

  }

  ngOnDestroy() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');

  }

}
