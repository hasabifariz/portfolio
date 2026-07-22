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
      date: 'Dec 2025 — present',
      title: 'Front-end Developer',
      company: 'PT Flexo Solusi Indonesia (Flexofast) · Contract, on-site',
      desc: 'Merged two legacy systems into one Angular WMS codebase, built the shared UI library (data tables, dropdowns, file upload/download, barcode scanning), and unified the API service pattern. Implemented auth, RBAC, session guards, background exports, and Elastic APM error tracking in production.',
      active: true,
    },
    {
      date: 'Sep 2024 — Mar 2025',
      title: 'Front-end Developer',
      company: 'PT ADI Consulting Indonesia · Placement at Arya Noble',
      desc: 'Built internal web applications with ReactJS, PrimeReact, and Tailwind. Turned Figma designs into responsive interfaces and worked Jira tickets through a regular release cycle, backed by code review and SonarQube quality gates.',
      active: false,
    },
    {
      date: 'Jun 2023 — Feb 2024',
      title: 'Front-end Developer',
      company: 'PT Indocyber Global Teknologi · Placement at AXA AFI',
      desc: 'Built UI components for claims processing and user management, integrated APIs with the backend team, and wrote responsive HTML email templates for consistent rendering across mail clients.',
      active: false,
    },
    {
      date: 'Nov 2021 — May 2023',
      title: 'Front-end Developer',
      company: 'PT Soluix Finteknologi Indonesia',
      desc: 'Worked across four client products — AJAIB (Bank Bumi Arta), Kawan Lama Invoice Portal, Clarity e-commerce platform, and WMS Honda — building interfaces with ReactJS and MaterialUI.',
      active: false,
    },
    {
      date: 'Nov 2020 — Mar 2021',
      title: 'Web Developer',
      company: 'PT Hexacore Bina Sejahtera · Projects for Telkom Indonesia',
      desc: 'Built the ITAM IT asset management system and refactored the UIMax inventory platform, using PugHTML, Node.js, Express.js, SemanticUI, and Neo4J.',
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
