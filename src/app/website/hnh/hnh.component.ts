import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import Glide from '@glidejs/glide';

@Component({
  selector: 'app-hnh',
  templateUrl: './hnh.component.html',
  styleUrl: './hnh.component.scss'
})
export class HnhComponent implements OnInit, OnDestroy {

  todayDate : number = Date.now();
  startDate : number = 0;

  createDataHnhHindi:any = [];
  myArray:any = [];
  sortedArray:any =[];

  summary ='';
  sdate='';
  description='';

  constructor(private userAccess: UserService) {}

  ngOnInit(): void {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');

    new Glide(".testimony_cards_hnh", {
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
      this.createDataHnhHindi = data;

      //  console.log(this.createData);
      // console.log('Length - ' + this.createData.items.length);

      for (let j = 0; j < this.createDataHnhHindi.items.length; j++) {

        if(this.createDataHnhHindi.items[j].summary !== "स्वास्थ्य और चंगाई") {

              delete this.createDataHnhHindi.items[j];
        } else if(this.createDataHnhHindi.items[j].status == 'cancelled') {
            delete this.createDataHnhHindi.items[j];
        } else if(this.createDataHnhHindi.items[j].start.date) {
          this.startDate = Date.parse(this.createDataHnhHindi.items[j].start.date);
          // console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
          if (this.startDate < this.todayDate) {
            // console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.date);
            delete this.createDataHnhHindi.items[j];
            this.myArray.push({ summary: this.createDataHnhHindi.items[j].summary, sdate: this.createDataHnhHindi.items[j].start.date, description: this.createDataHnhHindi.items[j].description });
            // console.log(this.createData.items[j].summary + '  ' + this.createData.items[j].start.date);
          }
        }
        // if(this.createData.items[j].summary !== 'How People Change') {
        //     delete this.createData.items[j];
        //     this.myArray.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime, description: this.createData.items[j].description });

        // }
      }

      // console.log(this.createData);
      // console.log('Length - ' + this.createData.items.length);

      let keyArr: any[] = Object.keys(this.createDataHnhHindi.items)
      keyArr.forEach((key: any) => {
        // console.log(this.createData.items[key].summary)
        // push object with abbreviation, price and coin to array
        if(this.createDataHnhHindi.items[key].start.dateTime){
          this.myArray.push({ summary: this.createDataHnhHindi.items[key].summary, sdate: this.createDataHnhHindi.items[key].start.dateTime, description: this.createDataHnhHindi.items[key].description  });
          // console.log(this.myArray);
        } else if(this.createDataHnhHindi.items[key].start.date){
          this.myArray.push({ summary: this.createDataHnhHindi.items[key].summary, sdate: this.createDataHnhHindi.items[key].start.date, description: this.createDataHnhHindi.items[key].description  });
          // console.log(this.myArray);
        }
      });
      // ASC
      this.sortedArray = this.myArray.sort((a: any, b: any) => {
        return <any>new Date(a.sdate) - <any>new Date(b.sdate);
      });
      // console.log(this.sortedArray);

       for (let i = 0; i < this.sortedArray.length; i++) {
        // if(this.sortedArray[i].summary !== 'How People Change') {
        //   delete this.sortedArray[i];
        // }
        console.log(this.sortedArray[i].summary);

        //console.log(this.createData.items[i].summary + '  ' + this.createData.items[i].start.date);
      }
      console.log(this.sortedArray);
    },
      error: (err) => {
      this.createDataHnhHindi = JSON.parse(err.error).message;
      console.log(JSON.parse(err.error).message);
      }
    });

  }

  ngOnDestroy() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');

  }

}
