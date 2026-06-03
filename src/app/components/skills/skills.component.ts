import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Skill {
  name: string;
  category: string;
  level: number; // 0–100
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

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div
            *ngFor="let skill of skills; let i = index"
            class="skill-card bg-white border border-orange-border rounded-xl p-4"
            [attr.data-index]="i"
          >
            <div class="text-xs text-ink-faint font-light tracking-widest uppercase mb-1"
                 style="font-size:0.6rem;">{{ skill.category }}</div>
            <div class="text-sm font-semibold text-ink mb-3">{{ skill.name }}</div>

            <!-- Bar -->
            <div class="h-0.5 rounded-full bg-orange-border overflow-hidden">
              <div
                class="skill-bar h-full rounded-full bg-orange"
                [class.bg-orange-soft]="skill.level < 80"
                [style.width.%]="0"
                [attr.data-level]="skill.level"
              ></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class SkillsComponent implements OnInit, AfterViewInit {

  skills: Skill[] = [
    { name: 'Angular',      category: 'framework',  level: 90 },
    { name: 'TypeScript',   category: 'language',   level: 85 },
    { name: 'RxJS',         category: 'reactive',   level: 75 },
    { name: 'Tailwind CSS', category: 'styling',    level: 88 },
    { name: 'PrimeNG',      category: 'ui lib',     level: 82 },
    { name: 'GSAP',         category: 'animation',  level: 72 },
    { name: 'React',        category: 'framework',  level: 68 },
    { name: 'FastAPI',      category: 'backend',    level: 60 },
  ];

  ngOnInit(): void {
    // Cards stagger entrance
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

  ngAfterViewInit(): void {
    // Skill bars fill on scroll
    ScrollTrigger.create({
      trigger: '#skills',
      start: 'top 60%',
      onEnter: () => {
        document.querySelectorAll<HTMLElement>('.skill-bar').forEach((bar) => {
          const level = bar.getAttribute('data-level') ?? '0';
          gsap.to(bar, {
            width: `${level}%`,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.2,
          });
        });
      },
    });
  }
}
