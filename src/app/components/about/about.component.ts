import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT_INFO } from '../../data/profile';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="bg-white py-24">
      <div class="container mx-auto px-8 max-w-5xl">

        <!-- eyebrow sits in its own row so the info cards line up with the title and the last paragraph -->
        <div class="grid md:grid-cols-2 gap-x-16 gap-y-8">

          <div class="section-eyebrow md:col-span-2 !mb-0">who I am</div>

          <!-- Left: text -->
          <div class="about-left">
            <h2 class="section-title">about <span>me</span></h2>
            <div class="section-underline"></div>

            <p class="text-sm text-ink-muted leading-loose mb-6">
              Front-end developer with over 4 years of experience building
              internal web applications for logistics, finance, and retail.
              Currently working in Angular and TypeScript on a warehouse
              management system, after several years in React.
            </p>
            <p class="text-sm text-ink-muted leading-loose">
              I focus on the parts users never see but always feel: reusable
              component structure, consistent API patterns, and interfaces
              that stay fast once the data grows into the thousands of <em>rows</em>.
            </p>
          </div>

          <!-- Right: info cards, stretched to the left column height -->
          <dl class="about-right flex flex-col gap-3">
            <div *ngFor="let info of infos"
                 class="info-card flex-1 flex items-center gap-4 px-4 py-3 bg-orange-warm rounded-xl border border-orange-border">
              <div class="w-10 h-10 flex-none grid place-items-center rounded-lg bg-white border border-orange-border text-orange"
                   [ngSwitch]="info.key" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.75"
                     stroke-linecap="round" stroke-linejoin="round">
                  <g *ngSwitchCase="'role'"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></g>
                  <g *ngSwitchCase="'location'"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></g>
                  <g *ngSwitchCase="'stack'"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></g>
                  <g *ngSwitchCase="'company'"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/></g>
                  <circle *ngSwitchDefault cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
              <div class="min-w-0">
                <dt class="text-ink-faint tracking-widest uppercase" style="font-size:0.625rem;">{{ info.key }}</dt>
                <dd class="text-sm text-ink-soft font-medium">{{ info.value }}</dd>
              </div>
            </div>
          </dl>

        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class AboutComponent implements OnInit {

  infos = ABOUT_INFO;

  ngOnInit(): void {
    gsap.from('.about-left', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      x: -60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
    });

    gsap.from('.about-right .info-card', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      x: 60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.08,
    });
  }
}
