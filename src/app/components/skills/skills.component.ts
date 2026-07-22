import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="bg-orange-warm py-24">
      <div class="container mx-auto px-8 max-w-5xl">

        <div class="skills-header mb-12">
          <div class="section-eyebrow">what I use</div>
          <h2 class="section-title">tech <span>stack</span></h2>
          <div class="section-underline"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-3">
          <div
            *ngFor="let group of skillGroups; let i = index"
            class="skill-card bg-white border border-orange-border rounded-xl p-5"
            [attr.data-index]="i"
          >
            <div class="text-xs text-ink-faint font-medium tracking-widest uppercase mb-3">
              {{ group.category }}
            </div>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let item of group.items"
                    class="text-xs text-orange bg-orange-pale border border-orange-border
                           px-3 py-1.5 rounded-full font-medium">
                {{ item }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class SkillsComponent implements OnInit {

  skillGroups: SkillGroup[] = [
    { category: 'Frameworks',          items: ['Angular', 'ReactJS'] },
    { category: 'UI Libraries',        items: ['PrimeNG', 'PrimeReact', 'MaterialUI', 'Tailwind CSS', 'PrimeFlex'] },
    { category: 'Languages',           items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    { category: 'State & Reactivity',  items: ['RxJS', 'Angular Signals', 'React Hooks'] },
    { category: 'Backend',             items: ['Node.js', 'Express.js', 'Neo4J'] },
    { category: 'Tooling',             items: ['Git', 'GitKraken', 'Bitbucket', 'Docker'] },
    { category: 'Monitoring & QA',     items: ['Elastic APM (RUM)', 'SonarQube'] },
    { category: 'Project Management',  items: ['Jira', 'ClickUp'] },
  ];

  ngOnInit(): void {
    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.07,
      ease: 'power3.out',
    });
  }
}
