import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { EXPERIENCE } from '../../data/experience';

gsap.registerPlugin(ScrollTrigger);


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
            <div class="flex flex-col items-center flex-shrink-0 pt-6">
              <div class="relative w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-offset-2 ring-offset-orange-warm"
                   [class.bg-orange]="item.active"
                   [class.ring-orange]="item.active"
                   [class.bg-orange-soft]="!item.active"
                   [class.ring-orange-border]="!item.active">
                <span *ngIf="item.active" aria-hidden="true"
                      class="absolute -inset-1 rounded-full bg-orange/60 motion-safe:animate-ping"></span>
              </div>
              <div *ngIf="!last" class="w-px flex-1 bg-orange-border mt-2 -mb-6"></div>
            </div>

            <!-- Content card -->
            <article class="tl-card flex-1 min-w-0 mb-6 rounded-xl border p-5 md:p-6"
                     [class.is-active]="item.active">
              <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-3">
                <div>
                  <h3 class="text-base font-semibold text-ink">{{ item.title }}</h3>
                  <div class="text-xs text-ink-subtle">{{ item.company }}</div>
                </div>
                <span class="text-xs font-medium rounded-full px-3 py-1 border whitespace-nowrap"
                      [class.text-white]="item.active" [class.bg-orange]="item.active" [class.border-orange]="item.active"
                      [class.text-orange-dark]="!item.active" [class.bg-orange-pale]="!item.active" [class.border-orange-border]="!item.active">
                  {{ item.date }}
                </span>
              </div>
              <ul class="flex flex-col gap-2">
                <li *ngFor="let point of item.points" class="flex gap-3 text-sm text-ink-soft leading-relaxed">
                  <span class="mt-[0.6em] w-1.5 h-1.5 flex-none rounded-full bg-orange" aria-hidden="true"></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    /* same elevation as the skill and project cards */
    .tl-card {
      background: #fff;
      border-color: var(--color-orange-border);
      box-shadow:
        0 1px 2px rgba(26, 26, 26, .04),
        0 6px 12px -6px rgba(26, 26, 26, .08),
        0 12px 20px -12px rgba(232, 84, 26, .14);
    }
    .tl-card.is-active {
      background: radial-gradient(120% 90% at 100% 0%, var(--color-orange-pale) 0%, #fff 45%);
      border-color: var(--color-orange-soft);
    }
  `],
})
export class TimelineComponent implements OnInit {

  items = EXPERIENCE;

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
