import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HeroComponent } from './views/hero/hero.component';
import { SkillComponent } from './views/skill/skill.component';
import { TechComponent } from './views/tech/tech.component';
import { ProjectComponent } from './views/project/project.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './views/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    SkillComponent,
    TechComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
