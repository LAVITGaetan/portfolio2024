import { Component } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {
  ngOnInit() {
    let section = document.getElementById('tech-container')
    window.onscroll = () => {
      if (section) {
        let top = window.scrollY;
        let offset = section.offsetTop - 600
        let height = section.offsetHeight
        let cards = Array.from(document.getElementsByClassName('tech-card'))
        cards.forEach(element => {
          element.classList.add('tech-card-showed')
        });
          if (top >= offset && top < offset + height) {
            section?.classList.add('show-animate')
          }
      }
    }
  }

}
