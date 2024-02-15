import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/app/environment/environment';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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
      emailjs.sendForm(environment.emailJs.serviceId, environment.emailJs.templateId, event.target as HTMLFormElement, environment.emailJs.userId)
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
    this.isLoading = false

  }
}
