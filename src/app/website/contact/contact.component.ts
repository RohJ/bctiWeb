import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {


  contactForm: FormGroup = new FormGroup({
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

    this.contactForm = this.formBuilder.group(
      {
        fullname: [null, [Validators.required]],
        phone: [null, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
        email: [null, [Validators.required, Validators.email]],
        message: [null, [Validators.required]]

      }
    );
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
