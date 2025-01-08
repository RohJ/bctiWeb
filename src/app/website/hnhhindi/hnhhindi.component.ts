import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import Glide from '@glidejs/glide';

@Component({
  selector: 'app-hnhhindi',
  templateUrl: './hnhhindi.component.html',
  styleUrl: './hnhhindi.component.scss'
})
export class HnhhindiComponent implements OnInit, OnDestroy {

  todayDate : number = Date.now();
  startDate : number = 0;

  createData:any = [];
  myArray:any = [];
  sortedArray:any =[];

  summary ='';
  sdate='';
  description='';

  constructor(private userAccess: UserService) {}

  ngOnInit(): void {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');

    new Glide(".testimony_cards_hnh_hindi", {
      type: "carousel",
      startAt: 0,
      focusAt: 0,
      // perTouch: 1,
      // perview: 5,
      autoplay: 0,
      breakpoints: {
        2560: {
          perView: 3
        },
        1440: {
          perView: 3
        },
        1024: {
          perView: 3
        },
        768: {
          perView: 2
        },
        600: {
          perView: 1
        }
      },
    }).mount();

    this.userAccess.getEvents()
    .subscribe({
      next: (data) => {
      this.createData = data;

      //  console.log(this.createData);
      // console.log('Length - ' + this.createData.items.length);

      for (let j = 0; j < this.createData.items.length; j++) {

        if(this.createData.items[j].summary == "स्वास्थ्य और चंगाई") {
          if(this.createData.items[j].status == 'cancelled') {
            // console.log('Cancelled Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
            delete this.createData.items[j];
          } else if(this.createData.items[j].start.dateTime) {
            this.startDate = Date.parse(this.createData.items[j].start.dateTime);
            //  console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
            if (this.startDate > this.todayDate) {
              // console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
              this.myArray.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime, description: this.createData.items[j].description });
            } else {
              // console.log('Older Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
              delete this.createData.items[j];
              }
          }
        } else {
            delete this.createData.items[j];
        }
      }

      // ASC
      this.sortedArray = this.myArray.sort((a: any, b: any) => {
        return <any>new Date(a.sdate) - <any>new Date(b.sdate);
      });

    },
      error: (err) => {
      this.createData = JSON.parse(err.error).message;
      console.log(JSON.parse(err.error).message);
      }
    });

  }

  ngOnDestroy() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');

  }

}
