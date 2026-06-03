import { Component } from '@angular/core';
import { NavbarComponent }   from './components/navbar/navbar.component';
import { HeroComponent }     from './components/hero/hero.component';
import { AboutComponent }    from './components/about/about.component';
import { SkillsComponent }   from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FooterComponent }   from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    TimelineComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-timeline />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
