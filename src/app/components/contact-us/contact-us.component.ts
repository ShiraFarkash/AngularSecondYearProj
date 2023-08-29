import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ContacUsForm: FormGroup = new FormGroup({});
  isFormSubmitted = false;

  RADIO_LIST = [
    { name: 'y', value: 'כן', checked: false },
    { name: 'n', value: 'לא', checked: false }

  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
    let getCheckedRadio = null
    this.RADIO_LIST.forEach(o => {
      if (o.checked) {
        getCheckedRadio = o.name;
        alert(getCheckedRadio)
      }
    })
    this.ContacUsForm = new FormGroup({
      'OrderOptions': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'phone': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'email': new FormControl('', Validators.required),
      'order-number': new FormControl('',[ Validators.required]),
      'city': new FormControl('', Validators.required),
      'free-message': new FormControl('', Validators.required)
      
    })
  }
  chose(s: string) {
    this.RADIO_LIST.forEach(o => {
      if ( o.name != s) {
        o.checked = false;
      }
      else {
        o.checked = true;
      }
    })
  }

  submitForm() {
    this.isFormSubmitted = true;
    console.log(this.ContacUsForm.value)
    if (!this.ContacUsForm.valid) {
      console.log('Please provide all the required values!')
      console.log(this.ContacUsForm.controls['phone'].errors)
    }
    else {
      console.log(this.ContacUsForm.value)
    }
  }


}
