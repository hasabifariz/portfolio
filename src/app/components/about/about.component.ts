import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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

        <div class="grid md:grid-cols-2 gap-16 items-start">

          <!-- Left: text -->
          <div class="about-left">
            <div class="section-eyebrow">who I am</div>
            <h2 class="section-title">about <span>me</span></h2>
            <div class="section-underline"></div>

            <p class="text-sm text-ink-muted font-light leading-loose mb-6">
              Front-end developer with nearly 5 years of experience building
              internal web applications for logistics, finance, and retail.
              Currently working in Angular and TypeScript on a warehouse
              management system, after several years in React.
            </p>
            <p class="text-sm text-ink-muted font-light leading-loose mb-8">
              I focus on the parts users never see but always feel: reusable
              component structure, consistent API patterns, and interfaces
              that stay fast once the data grows into the thousands of <em>rows</em>.
            </p>

            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tag of tags"
                    class="text-xs text-orange bg-orange-pale border border-orange-border
                           px-3 py-1.5 rounded-full font-medium">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Right: info cards -->
          <div class="about-right flex flex-col gap-3">
            <div *ngFor="let info of infos"
                 class="flex items-center gap-3 px-4 py-3 bg-orange-warm rounded-lg border border-orange-border">
              <div class="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0"></div>
              <span class="text-xs text-ink-faint font-light w-20">{{ info.key }}</span>
              <span class="text-xs text-ink-soft font-medium">{{ info.value }}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class AboutComponent implements OnInit {

  tags = ['Angular', 'TypeScript', 'RxJS', 'Tangerang, ID'];

  infos = [
    { key: 'role',     value: 'Front-end Developer' },
    { key: 'location', value: 'Legok, Tangerang' },
    { key: 'stack',    value: 'Angular · React · Node.js' },
    { key: 'company',  value: 'Flexofast' },
    { key: 'status',   value: 'Contract · On-site' },
  ];

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

    gsap.from('.about-right .flex', {
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
