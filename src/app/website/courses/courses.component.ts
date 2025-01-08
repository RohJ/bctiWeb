import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent implements OnInit, OnDestroy {

  // coursesForm: FormGroup = new FormGroup({
  //   fullname: new FormControl(''),
  //   phone: new FormControl(''),
  //   email: new FormControl(''),
  //   message: new FormControl(''),
  // });

  submitted = false;

  todayDate : number = Date.now();
  startDate : number = 0;

  createData:any = [];
  myArray:any = [];
  sortedArray:any =[];

  createDataCCEF:any = [];
  myArrayCCEF:any = [];
  sortedArrayCCEF:any =[];

  createDataHindi:any = [];
  myArrayHindi:any = [];
  sortedArrayHindi:any =[];

  summary ='';
  sdate='';
  description='';

  constructor(private userAccess: UserService) {}

  ngOnInit(): void {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');

    // this.coursesForm = this.formBuilder.group(
    //   {
    //     fullname: [null, [Validators.required]],
    //     phone: [null, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    //     email: [null, [Validators.required, Validators.email]],
    //     message: [null, [Validators.required]]
    //   }
    // );

    this.userAccess.getEvents()
    .subscribe({
      next: (data) => {
      this.createData = data;

      // console.log(this.createData);
      // console.log('Length - ' + this.createData.items.length);
      // console.log('Today date '+this.todayDate);
      for (let j = 0; j < this.createData.items.length; j++) {
        // console.log('loop '+j);

        switch (this.createData.items[j].summary) {

          case 'How People Change':
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
            break;

          case 'Instruments in the Redeemers Hands':
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
            break;

          case 'Marriage and Parenting':
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
            break;

          case 'Health and Healing':
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
            break;

            case 'लोग कैसे बदलते है':
            if(this.createData.items[j].status == 'cancelled') {
              // console.log('Cancelled Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
              delete this.createData.items[j];
            } else if(this.createData.items[j].start.dateTime) {
              this.startDate = Date.parse(this.createData.items[j].start.dateTime);
              //  console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
              if (this.startDate > this.todayDate) {
                // console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
                this.myArrayHindi.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime, description: this.createData.items[j].description });
              } else {
                // console.log('Older Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
                delete this.createData.items[j];
                }
            }
            break;

          case 'परिवर्तन के उपकरण':
            if(this.createData.items[j].status == 'cancelled') {
              // console.log('Cancelled Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
              delete this.createData.items[j];
            } else if(this.createData.items[j].start.dateTime) {
              this.startDate = Date.parse(this.createData.items[j].start.dateTime);
              //  console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
              if (this.startDate > this.todayDate) {
                // console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
                this.myArrayHindi.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime, description: this.createData.items[j].description });
              } else {
                // console.log('Older Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
                delete this.createData.items[j];
                }
            }
            break;

          case 'विवाह और परवरिश':
            if(this.createData.items[j].status == 'cancelled') {
              // console.log('Cancelled Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
              delete this.createData.items[j];
            } else if(this.createData.items[j].start.dateTime) {
              this.startDate = Date.parse(this.createData.items[j].start.dateTime);
              //  console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
              if (this.startDate > this.todayDate) {
                // console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
                this.myArrayHindi.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime, description: this.createData.items[j].description });
              } else {
                // console.log('Older Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
                delete this.createData.items[j];
                }
            }
            break;

          case 'स्वास्थ्य और चंगाई':
            if(this.createData.items[j].status == 'cancelled') {
              // console.log('Cancelled Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
              delete this.createData.items[j];
            } else if(this.createData.items[j].start.dateTime) {
              this.startDate = Date.parse(this.createData.items[j].start.dateTime);
              //  console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
              if (this.startDate > this.todayDate) {
                // console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
                this.myArrayHindi.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime, description: this.createData.items[j].description });
              } else {
                // console.log('Older Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
                delete this.createData.items[j];
                }
            }
            break;

            case 'Dynamics of Biblical Change':
            if(this.createData.items[j].status == 'cancelled') {
              // console.log('Cancelled Data ' + this.createDataCCEF.items[j].summary + '  ' + this.createDataCCEF.items[j].start.dateTime);
              delete this.createData.items[j];
            } else if(this.createData.items[j].start.dateTime) {
              this.startDate = Date.parse(this.createData.items[j].start.dateTime);
              //  console.log(j + ' start date - ' + this.startDate + '  ' + this.createDataCCEF.items[j].summary);
              if (this.startDate > this.todayDate) {
                // console.log('Filtered Data ' + this.createDataCCEF.items[j].summary + '  ' + this.createDataCCEF.items[j].start.dateTime);
                this.myArrayCCEF.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime, description: this.createData.items[j].description });
              } else {
                // console.log('Older Data ' + this.createDataCCEF.items[j].summary + '  ' + this.createDataCCEF.items[j].start.dateTime);
                delete this.createData.items[j];
                }
            }
            break;

          case 'Helping Relationships':
            if(this.createData.items[j].status == 'cancelled') {
              // console.log('Cancelled Data ' + this.createDataCCEF.items[j].summary + '  ' + this.createDataCCEF.items[j].start.dateTime);
              delete this.createData.items[j];
            } else if(this.createData.items[j].start.dateTime) {
              this.startDate = Date.parse(this.createData.items[j].start.dateTime);
              //  console.log(j + ' start date - ' + this.startDate + '  ' + this.createDataCCEF.items[j].summary);
              if (this.startDate > this.todayDate) {
                // console.log('Filtered Data ' + this.createDataCCEF.items[j].summary + '  ' + this.createDataCCEF.items[j].start.dateTime);
                this.myArrayCCEF.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime, description: this.createData.items[j].description });
              } else {
                // console.log('Older Data ' + this.createDataCCEF.items[j].summary + '  ' + this.createDataCCEF.items[j].start.dateTime);
                delete this.createData.items[j];
                }
            }
            break;

          default:
            // console.log('Unmatched Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
            delete this.createData.items[j];
            break;
        }
      }

      // console.log('New Array:');
      // console.log(this.myArray);
      // ASC
      this.sortedArray = this.myArray.sort((a: any, b: any) => {
        return <any>new Date(a.sdate) - <any>new Date(b.sdate);
      });

      // ASC CCEF
      this.sortedArrayCCEF = this.myArrayCCEF.sort((a: any, b: any) => {
        return <any>new Date(a.sdate) - <any>new Date(b.sdate);
      });

      // ASC Hindi
      this.sortedArrayHindi = this.myArrayHindi.sort((a: any, b: any) => {
        return <any>new Date(a.sdate) - <any>new Date(b.sdate);
      });
      //  console.log('Sorted Array:');
      //  console.log(this.sortedArray);

      //  for (let i = 0; i < 3; i++) {
        // console.log(this.createData);
        //console.log(this.createData.items[i].summary + '  ' + this.createData.items[i].start.date);
      // }
    },
      error: (err) => {
      this.createData = JSON.parse(err.error).message;
      console.log(JSON.parse(err.error).message);
      }
    });

  }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.coursesForm.controls;

  // }

  ngOnDestroy() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');

  }

  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.coursesForm.invalid) {
  //     return;
  //   }
  //   console.log(this.coursesForm);
  //   console.log(JSON.stringify(this.coursesForm.value, null, 2));
  // }

  // onReset(): void {
  //   this.submitted = false;
  //   this.coursesForm.reset();
  // }

}
