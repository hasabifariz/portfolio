import {
  Component, OnInit, AfterViewInit,
  ElementRef, QueryList, ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  thumbCells: ('hot' | 'mid' | 'light' | 'faint')[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="bg-white py-24">
      <div class="container mx-auto px-8 max-w-5xl">

        <div class="projects-header mb-12">
          <div class="section-eyebrow">what I've built</div>
          <h2 class="section-title">featured <span>projects</span></h2>
          <div class="section-underline"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            #projectCard
            *ngFor="let project of projects; let i = index"
            class="project-card group bg-white border border-orange-border rounded-2xl
                   overflow-hidden cursor-pointer"
            (mouseenter)="onCardEnter($event, i)"
            (mouseleave)="onCardLeave($event, i)"
            (mousemove)="onCardMove($event, i)"
          >
            <!-- Thumb placeholder -->
            <div class="h-36 bg-orange-pale relative overflow-hidden">
              <!-- Abstract grid pattern -->
              <div class="absolute inset-0 grid grid-cols-5 grid-rows-2 gap-1.5 p-3 opacity-70">
                <div *ngFor="let cell of project.thumbCells"
                     class="rounded"
                     [class.bg-orange]="cell === 'hot'"
                     [class.bg-orange-soft]="cell === 'mid'"
                     [class.bg-orange-border]="cell === 'light'"
                     [class.bg-orange-warm]="cell === 'faint'">
                </div>
              </div>
              <!-- Project number watermark -->
              <span class="absolute top-3 right-4 text-5xl font-bold text-orange/10"
                    style="letter-spacing:-0.04em;">{{ project.number }}</span>
            </div>

            <!-- Body -->
            <div class="p-5">
              <h3 class="text-base font-semibold text-ink mb-1.5 group-hover:text-orange
                         transition-colors duration-200">
                {{ project.title }}
              </h3>
              <p class="text-xs text-ink-muted font-light leading-relaxed mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span *ngFor="let tag of project.tags"
                      class="text-xs text-orange bg-orange-pale border border-orange-border
                             px-2.5 py-1 rounded-full font-medium"
                      style="font-size:0.6875rem;">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('projectCard') cards!: QueryList<ElementRef>;

  projects: Project[] = [
    {
      number: '01',
      title: 'WMS — Flexofast',
      description:
        'Warehouse management system covering receiving, inventory, picking, order processing, and reporting. Includes barcode scanning, background Excel exports with polling, and a mobile interface for warehouse floor operations.',
      tags: ['Angular', 'PrimeNG', 'RxJS', 'TypeScript'],
      thumbCells: ['hot','light','mid','light','faint','light','faint','light','hot','mid'],
    },
    {
      number: '02',
      title: 'Arya Noble — Internal Web Apps',
      description:
        'Internal web applications for a beauty, skincare, and wellness company. Turned Figma designs into responsive interfaces and worked through Jira tickets on a regular release cycle.',
      tags: ['React', 'PrimeReact', 'Tailwind'],
      thumbCells: ['mid','light','hot','faint','light','hot','light','faint','mid','light'],
    },
    {
      number: '03',
      title: 'AXA AFI — Claims & User Management',
      description:
        'UI components for claims processing and user management at an insurance and financial services company, plus responsive HTML email templates for consistent rendering across mail clients.',
      tags: ['UI Components', 'API Integration', 'HTML Email'],
      thumbCells: ['light','hot','mid','light','faint','light','hot','faint','light','mid'],
    },
    {
      number: '04',
      title: 'AJAIB — Bank Bumi Arta',
      description:
        'User interfaces built from Functional Specification Documents and integrated with the supporting APIs for a banking client.',
      tags: ['React', 'API Integration'],
      thumbCells: ['faint','mid','light','hot','light','faint','mid','light','hot','light'],
    },
    {
      number: '05',
      title: 'Kawan Lama Group — Invoice Portal',
      description:
        'Web-based invoice management system covering tenants, users, and transactions, with real-time invoice generation and data updates built in ReactJS and MaterialUI.',
      tags: ['React', 'MaterialUI', 'JavaScript'],
      thumbCells: ['mid','hot','light','faint','mid','faint','light','hot','mid','light'],
    },
    {
      number: '06',
      title: 'Clarity — E-commerce Platform & Admin Panel',
      description:
        'Furniture sales platform serving both public and LKPP procurement channels, with an admin panel for content and inventory management built in ReactJS and MaterialUI.',
      tags: ['React', 'MaterialUI', 'API Integration'],
      thumbCells: ['light','mid','hot','light','faint','hot','faint','mid','light','hot'],
    },
    {
      number: '07',
      title: 'WMS Honda Line 1 & 2',
      description:
        'Extended a warehouse management system for inventory tracking and logistics, adding features for reporting, search, and tracking.',
      tags: ['React', 'MaterialUI'],
      thumbCells: ['hot','faint','light','mid','light','hot','light','faint','mid','light'],
    },
    {
      number: '08',
      title: 'ITAM — IT Asset Management',
      description:
        'Web-based IT asset tracking and storage system built for Telkom Indonesia, with optimized database queries to cut down load times.',
      tags: ['Node.js', 'Express.js', 'Neo4J'],
      thumbCells: ['light','light','hot','faint','mid','light','faint','hot','light','mid'],
    },
    {
      number: '09',
      title: 'UIMax — ISP & OSP',
      description:
        'Refactored a unified inventory management platform for Telkom Indonesia to be easier to maintain and faster to run, plus API queries feeding the reporting layer.',
      tags: ['Node.js', 'Express.js', 'Refactor'],
      thumbCells: ['mid','light','faint','hot','light','light','mid','faint','hot','light'],
    },
    {
      number: '10',
      title: 'Portfolio — this site',
      description:
        'Single-page portfolio built with Angular, Tailwind CSS, GSAP ScrollTrigger animations, and Elms Sans typography.',
      tags: ['Angular', 'Tailwind', 'GSAP', 'Elms Sans'],
      thumbCells: ['faint','light','mid','hot','light','mid','hot','light','faint','mid'],
    },
  ];

  ngOnInit(): void {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      y: 60,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }

  ngAfterViewInit(): void {}

  onCardEnter(e: MouseEvent, i: number): void {
    const card = this.cards.get(i)?.nativeElement;
    if (!card) return;
    gsap.to(card, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
  }

  onCardLeave(e: MouseEvent, i: number): void {
    const card = this.cards.get(i)?.nativeElement;
    if (!card) return;
    gsap.to(card, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  }

  onCardMove(e: MouseEvent, i: number): void {
    const card = this.cards.get(i)?.nativeElement;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -5;
    const rotY = ((x - cx) / cx) * 5;

    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      transformPerspective: 800,
      duration: 0.3,
      ease: 'power1.out',
    });
  }
}
