import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  desc: string;
  active: boolean;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="bg-orange-warm py-24">
      <div class="container mx-auto px-8 max-w-5xl">

        <div class="timeline-header mb-12">
          <div class="section-eyebrow">where I've been</div>
          <h2 class="section-title">experience <span>timeline</span></h2>
          <div class="section-underline"></div>
        </div>

        <div class="flex flex-col">
          <div
            *ngFor="let item of items; let last = last"
            class="tl-item flex gap-5"
          >
            <!-- Line + Dot -->
            <div class="flex flex-col items-center flex-shrink-0">
              <div class="w-3 h-3 rounded-full mt-1 flex-shrink-0 ring-2 ring-offset-2"
                   [class.bg-orange]="item.active"
                   [class.ring-orange]="item.active"
                   [class.ring-offset-orange-warm]="item.active"
                   [class.bg-orange-soft]="!item.active && item.date !== ''"
                   [class.ring-orange-border]="!item.active"
                   [class.bg-orange-border]="item.date === '' || (!item.active && item.date.includes('2021'))"
              ></div>
              <div *ngIf="!last" class="w-px flex-1 bg-orange-border my-1 min-h-6"></div>
            </div>

            <!-- Content -->
            <div class="pb-8">
              <div class="text-xs font-medium tracking-widest mb-1"
                   style="font-size:0.625rem;"
                   [class.text-orange]="item.active"
                   [class.text-orange-soft]="!item.active && !item.date.includes('2021')"
                   [class.text-ink-faint]="item.date.includes('2021')">
                {{ item.date }}
              </div>
              <h3 class="text-base font-semibold mb-0.5"
                  [class.text-ink]="item.active"
                  [class.text-ink-muted]="!item.active">
                {{ item.title }}
              </h3>
              <div class="text-xs font-light text-ink-subtle mb-2">{{ item.company }}</div>
              <p class="text-xs font-light text-ink-muted leading-loose max-w-lg">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class TimelineComponent implements OnInit {

  items: TimelineItem[] = [
    {
      date: '2023 — present',
      title: 'Frontend Developer',
      company: 'Flexofast · Angular, WMS, PrimeNG',
      desc: 'Building and maintaining a full-featured Warehouse Management System with Angular. Key work includes RxJS-heavy data flows, HTTP interceptors, background polling for Excel exports, barcode label printing, and drag-and-drop tree structures.',
      active: true,
    },
    {
      date: '2022 — 2023',
      title: 'Frontend Developer (Placement)',
      company: 'React · PrimeReact · TypeScript',
      desc: 'Built data-heavy dashboards and form-driven interfaces using React and PrimeReact. Developed strong foundations in component architecture and TypeScript.',
      active: false,
    },
    {
      date: '2021 — 2022',
      title: 'Internship / Learning phase',
      company: 'Web Fundamentals · JavaScript · HTML/CSS',
      desc: 'Started the frontend journey — learning core web technologies, JavaScript ES6+, and building small projects to develop practical skills.',
      active: false,
    },
  ];

  ngOnInit(): void {
    gsap.from('.tl-item', {
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      x: -50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }
}
