import {
  Component, OnInit, AfterViewInit,
  ElementRef, QueryList, ViewChild, ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { PROJECTS } from '../../data/projects';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="bg-white py-24">
      <div class="container mx-auto px-8 max-w-5xl">

        <div class="projects-header mb-8">
          <div class="section-eyebrow">what I've built</div>
          <h2 class="section-title">featured <span>projects</span></h2>
          <div class="section-underline !mb-0"></div>
        </div>

        <div class="relative">
        <button type="button" aria-label="Previous projects" (click)="scroll(-1)"
                class="nav-btn prev" [class.is-hidden]="atStart">
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.25"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button type="button" aria-label="Next projects" (click)="scroll(1)"
                class="nav-btn next" [class.is-hidden]="atEnd">
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.25"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <!-- native scroll + snap for touch; mouse drag handled in onDragStart -->
        <div #track tabindex="0" aria-label="Projects, scroll horizontally"
             class="project-track flex gap-6 overflow-x-auto snap-x snap-mandatory py-8 -my-4 -mx-4 px-4 scroll-px-4"
             [class.dragging]="dragging"
             [class.fade-start]="!atStart" [class.fade-end]="!atEnd"
             (scroll)="updateEdges()"
             (pointerdown)="onDragStart($event)" (pointermove)="onDragMove($event)"
             (pointerup)="onDragEnd()" (pointercancel)="onDragEnd()">
          <div
            #projectCard
            *ngFor="let project of projects; let i = index"
            class="project-card group relative flex-none w-[85%] sm:w-80 md:w-96 h-[23rem] snap-start flex flex-col
                   bg-white border border-orange-border rounded-2xl overflow-hidden"
            (mouseenter)="onCardEnter($event, i)"
            (mouseleave)="onCardLeave($event, i)"
            (mousemove)="onCardMove($event, i)"
          >
            <!-- Thumb placeholder -->
            <div class="h-28 flex-none bg-orange-pale relative overflow-hidden">
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
                    style="letter-spacing:-0.04em;">{{ (i + 1).toString().padStart(2, '0') }}</span>
            </div>

            <!-- Body -->
            <div class="p-5 flex-1 flex flex-col min-h-0">
              <h3 class="text-base font-semibold text-ink mb-1.5 line-clamp-2 transition-colors duration-200"
                  [ngClass]="{ 'group-hover:text-orange': project.link }">
                <!-- stretched link: the whole card is clickable only when the project has a link -->
                <a *ngIf="project.link; else plainTitle" [href]="project.link" target="_blank" rel="noopener noreferrer"
                   class="after:absolute after:inset-0" draggable="false">
                  {{ project.title }} <span aria-hidden="true">↗</span>
                </a>
                <ng-template #plainTitle>{{ project.title }}</ng-template>
              </h3>
              <p class="text-xs text-ink-muted leading-relaxed mb-4 line-clamp-4" [title]="project.description">
                {{ project.description }}
              </p>
              <div class="mt-auto flex flex-wrap gap-1.5">
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

      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .project-track { scrollbar-width: thin; scrollbar-color: var(--color-orange-border) transparent; }
    @media (pointer: fine) { .project-track { cursor: grab; } }
    /* snap off while dragging, or the browser fights every scrollLeft write */
    .project-track.dragging { cursor: grabbing; scroll-snap-type: none; user-select: none; }

    /* fade the cut-off edge so a half card reads as "more this way" */
    .project-track.fade-end   { -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 2rem), transparent); mask-image: linear-gradient(to right, #000 calc(100% - 2rem), transparent); }
    .project-track.fade-start { -webkit-mask-image: linear-gradient(to left,  #000 calc(100% - 1rem), transparent); mask-image: linear-gradient(to left,  #000 calc(100% - 1rem), transparent); }
    .project-track.fade-start.fade-end {
      -webkit-mask-image: linear-gradient(to right, transparent, #000 1rem, #000 calc(100% - 2rem), transparent);
      mask-image: linear-gradient(to right, transparent, #000 1rem, #000 calc(100% - 2rem), transparent);
    }

    /* positioned with margins (not transform) so it never shifts sideways */
    .nav-btn {
      position: absolute;
      top: 50%;
      z-index: 10;
      display: none;
      place-items: center;
      width: 3rem;
      height: 3rem;
      margin-top: -1.5rem;
      border-radius: 9999px;
      color: #fff;
      background: var(--color-orange);
      transition: background .2s ease, opacity .2s ease;
    }
    .nav-btn.prev { left: 0; margin-left: -1.5rem; }
    .nav-btn.next { right: 0; margin-right: -1.5rem; }
    @media (min-width: 768px) { .nav-btn { display: grid; } }
    .nav-btn:hover { background: #C23E0E; }
    .nav-btn.is-hidden { opacity: 0; pointer-events: none; }

    .project-card {
      box-shadow:
        0 1px 2px rgba(26, 26, 26, .04),
        0 6px 12px -6px rgba(26, 26, 26, .08),
        0 12px 20px -12px rgba(232, 84, 26, .14);
      transition: box-shadow .3s ease;
    }
    .project-card:hover {
      box-shadow:
        0 2px 4px rgba(26, 26, 26, .05),
        0 10px 20px -8px rgba(26, 26, 26, .12),
        0 20px 28px -16px rgba(232, 84, 26, .25);
    }
  `],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('projectCard') cards!: QueryList<ElementRef>;
  @ViewChild('track') track!: ElementRef<HTMLElement>;

  projects = PROJECTS;

  dragging = false;
  private dragStartX = 0;
  private dragStartLeft = 0;

  private pressed = false;

  onDragStart(e: PointerEvent): void {
    if (e.pointerType !== 'mouse' || e.button !== 0) return; // touch scrolls natively
    this.pressed = true;
    this.dragStartX = e.clientX;
    this.dragStartLeft = this.track.nativeElement.scrollLeft;
    e.preventDefault();
  }

  onDragMove(e: PointerEvent): void {
    if (!this.pressed) return;
    const dx = e.clientX - this.dragStartX;
    // only start dragging past 5px, so a plain click still reaches a card link;
    // once captured, the release click goes to the track and doesn't open the link
    if (!this.dragging && Math.abs(dx) > 5) {
      this.dragging = true;
      this.track.nativeElement.setPointerCapture(e.pointerId);
    }
    if (this.dragging) this.track.nativeElement.scrollLeft = this.dragStartLeft - dx;
  }

  onDragEnd(): void {
    this.pressed = false;
    this.dragging = false;
  }

  atStart = true;
  atEnd = false;

  updateEdges(): void {
    const el = this.track.nativeElement;
    this.atStart = el.scrollLeft < 8;
    this.atEnd = el.scrollLeft + el.clientWidth > el.scrollWidth - 8;
  }

  scroll(dir: 1 | -1): void {
    const el = this.track.nativeElement;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  }

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
    gsap.to(card, { y: -6, scale: 1.02, duration: 0.3, ease: 'power2.out' });
  }

  onCardLeave(e: MouseEvent, i: number): void {
    const card = this.cards.get(i)?.nativeElement;
    if (!card) return;
    gsap.to(card, {
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  }

  onCardMove(e: MouseEvent, i: number): void {
    const card = this.cards.get(i)?.nativeElement;
    if (!card || this.dragging) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;

    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      transformPerspective: 800,
      duration: 0.3,
      ease: 'power1.out',
    });
  }
}
