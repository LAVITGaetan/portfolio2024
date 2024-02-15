import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/app/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class EmailJSService {

  constructor() { }
  sendEmail(event : Event) {
    emailjs.sendForm(environment.emailJs.serviceId, environment.emailJs.templateId, event.target as HTMLFormElement, environment.emailJs.userId)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
