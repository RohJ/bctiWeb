import { Component } from '@angular/core';
// import * as $ from 'jquery';
// declare function test(): void;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

//   constructor(){
//     test();
//  }

  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  open = false;

  openMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
   }
  closeMenu() {
     this.menuValue = false;
     this.menu_icon = 'bi bi-list';
   }

   toggle() {

    this.open = !this.open;

      // var e = document.getElementsByClassName('iphone__screen')[0];
      // e.classList.add('nav--active');

   }


}
