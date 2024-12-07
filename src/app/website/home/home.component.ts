import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

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


export class HomeComponent implements OnInit, OnDestroy {


  contactForm: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  submitted = false;

  todayDate : number = Date.now();
  startDate : number = 0;

  createData:any = [];
  myArray:any = [];
  sortedArray:any =[];

  summary ='';
  sdate='';
  description='';

  constructor(private formBuilder: FormBuilder, private userAccess: UserService) {}


  ngOnInit(): void {
    glide.mount();
    glide1.mount();
    glide2.mount();
    glide3.mount();

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');

    this.contactForm = this.formBuilder.group(
      {
        fullname: [null, [Validators.required]],
        phone: [null, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
        email: [null, [Validators.required, Validators.email]],
        message: [null, [Validators.required]]

      }
    );

    this.userAccess.getEvents()
    .subscribe({
      next: (data) => {
      this.createData = data;

      // console.log(this.createData);
      // console.log('Length - ' + this.createData.items.length);

      for (let j = 0; j < this.createData.items.length; j++) {
        // console.log('Date - ' + this.createData.items[j].start.date);
        // console.log('DateTime - ' + this.createData.items[j].start.dateTime);

        if(this.createData.items[j].summary !== "How People Change") {
          if (this.createData.items[j].summary !== "Instruments in the Redeemers Hands") {
            if(this.createData.items[j].summary !== "Marriage and Parenting") {
              if(this.createData.items[j].summary !== "Health and Healing") {
                if(this.createData.items[j].summary !== "Dynamics of Biblical Change") {
                  if(this.createData.items[j].summary !== "Helping Relationships") {
                delete this.createData.items[j];
        } } } } } } else if(this.createData.items[j].status == 'cancelled') {
            delete this.createData.items[j];
        }else if(this.createData.items[j].start.date) {
          this.startDate = Date.parse(this.createData.items[j].start.date);
          // console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
          if (this.startDate < this.todayDate) {
            console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.date);
            delete this.createData.items[j];
            this.myArray.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.date, description: this.createData.items[j].description });
            // console.log(this.createData.items[j].summary + '  ' + this.createData.items[j].start.date);
          }
        } else if(this.createData.items[j].start.dateTime) {
            this.startDate = Date.parse(this.createData.items[j].start.dateTime);
            // console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
            if (this.startDate < this.todayDate) {
            // console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
            delete this.createData.items[j];
            this.myArray.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime, description: this.createData.items[j].description });
            // console.log(this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
            }
        }
      }

      // console.log(this.createData);
      // console.log('Length - ' + this.createData.items.length);

      let keyArr: any[] = Object.keys(this.createData.items)
      keyArr.forEach((key: any) => {
        // console.log(this.createData.items[key].summary)
        // push object with abbreviation, price and coin to array
        if(this.createData.items[key].start.dateTime){
          this.myArray.push({ summary: this.createData.items[key].summary, sdate: this.createData.items[key].start.dateTime, description: this.createData.items[key].description  });
          // console.log(this.myArray);
        } else if(this.createData.items[key].start.date){
          this.myArray.push({ summary: this.createData.items[key].summary, sdate: this.createData.items[key].start.date, description: this.createData.items[key].description  });
          // console.log(this.myArray);
        }
      });
      // ASC
      this.sortedArray = this.myArray.sort((a: any, b: any) => {
        return <any>new Date(a.sdate) - <any>new Date(b.sdate);
      });
      // console.log(this.sortedArray);

       for (let i = 0; i < 3; i++) {
        // console.log(this.createData);
        //console.log(this.createData.items[i].summary + '  ' + this.createData.items[i].start.date);
      }
    },
      error: (err) => {
      this.createData = JSON.parse(err.error).message;
      console.log(JSON.parse(err.error).message);
      }
    });

  }

    get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;

  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');
  }

  // createContactForm() {
  //   this.contactForm = this.formBuilder.group({
  //     fullName: [''],
  //     email: [''],
  //     message: ['']
  //   });
  // }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    console.log(this.contactForm);
    console.log(JSON.stringify(this.contactForm.value, null, 2));

  }

  onReset(): void {
    this.submitted = false;
    this.contactForm.reset();
  }

}
