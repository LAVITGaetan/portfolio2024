import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private sanitize: DomSanitizer) { }
  demoIsShowed : boolean = false
  youtube_url = "https://www.youtube.com/embed/"
  video_url = ""
  setUrl() {
    return this.sanitize.bypassSecurityTrustResourceUrl(`${this.youtube_url}${this.video_url}`)
  }

  showDemo(url: string) {
    this.demoIsShowed = true
    this.video_url = url
    this.setUrl()
  }

  
  closeDemo() {
    this.demoIsShowed = false
    this.video_url = ""
  }
}
