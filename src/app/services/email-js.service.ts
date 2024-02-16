import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Injectable({
  providedIn: 'root'
})
export class EmailJSService {
  constructor() { }
  sendEmail(event: Event) {
    let user_id = process.env['userId'];
    let service_id = process.env['serviceId'];
    let template_id = process.env['templateId'];
    if (user_id && service_id && template_id)
      emailjs.sendForm(service_id, template_id, event.target as HTMLFormElement, user_id)
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  }

}
