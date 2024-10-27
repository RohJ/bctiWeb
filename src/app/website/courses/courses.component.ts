import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent implements OnInit, OnDestroy {

  coursesForm: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('custom-class');

    this.coursesForm = this.formBuilder.group(
      {
        fullname: [null, [Validators.required]],
        phone: [null, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
        email: [null, [Validators.required, Validators.email]],
        message: [null, [Validators.required]]

      }
    );

  }

  get f(): { [key: string]: AbstractControl } {
    return this.coursesForm.controls;

  }

  ngOnDestroy() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('custom-class');

  }

  onSubmit(): void {
    this.submitted = true;

    if (this.coursesForm.invalid) {
      return;
    }
    console.log(this.coursesForm);
    console.log(JSON.stringify(this.coursesForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.coursesForm.reset();
  }

}
