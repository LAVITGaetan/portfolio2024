import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmailJSService } from 'src/app/services/email-js.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private emailJS: EmailJSService) { }
  isLoading: boolean = false
  contactForm = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    object: new FormControl('', [Validators.required, Validators.minLength(3)]),
    message: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })


  submitForm(event: Event) {
    this.isLoading = true
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.emailJS.sendEmail(event)
    }
    this.isLoading = false
  }
}
