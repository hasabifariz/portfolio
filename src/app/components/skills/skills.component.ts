import { Component, AfterViewInit } from '@angular/core';

import { SKILL_GROUPS } from '../../data/skills';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  template: `
    <section id="skills" class="bg-orange-warm py-24">
      <div class="container mx-auto px-8 max-w-5xl">
    
        <div class="skills-header mb-12">
          <div class="section-eyebrow">what I use</div>
          <h2 class="section-title">tech <span>stack</span></h2>
          <div class="section-underline"></div>
        </div>
    
        <div class="grid md:grid-cols-2 gap-4">
          @for (group of skillGroups; track group; let i = $index) {
            <div
              class="skill-card group border border-orange-border rounded-xl p-5"
              [attr.data-index]="i"
              >
            <div class="text-xs text-ink-faint font-medium tracking-widest uppercase mb-3
                        group-hover:text-orange transition-colors duration-300">
                {{ group.category }}
              </div>
              <div class="flex flex-wrap gap-2">
                @for (item of group.items; track item) {
                  <span
                    class="chip text-xs text-orange bg-orange-pale border border-orange-border
                           px-3 py-1.5 rounded-full font-medium">
                    {{ item }}
                  </span>
                }
              </div>
            </div>
          }
        </div>
    
      </div>
    </section>
    `,
  styles: [`
    :host { display: block; }

    /* same elevation as project cards; 'translate' (not transform) so it doesn't clash with GSAP's inline transform */
    .skill-card {
      background: radial-gradient(120% 90% at 100% 0%, var(--color-orange-pale) 0%, #fff 45%);
      box-shadow:
        0 1px 2px rgba(26, 26, 26, .04),
        0 6px 12px -6px rgba(26, 26, 26, .08),
        0 12px 20px -12px rgba(232, 84, 26, .14);
      transition: translate .3s ease, box-shadow .3s ease, border-color .3s ease;
    }
    .skill-card:hover {
      translate: 0 -4px;
      border-color: var(--color-orange-soft);
      box-shadow:
        0 2px 4px rgba(26, 26, 26, .05),
        0 10px 20px -8px rgba(26, 26, 26, .12),
        0 20px 28px -16px rgba(232, 84, 26, .25);
    }
    .chip { transition: background .2s ease, color .2s ease, border-color .2s ease; }
    .chip:hover { background: var(--color-orange); border-color: var(--color-orange); color: #fff; }

    @media (prefers-reduced-motion: reduce) {
      .skill-card:hover { translate: none; }
    }
  `],
})
export class SkillsComponent implements AfterViewInit {

  skillGroups = SKILL_GROUPS;

  // AfterViewInit, not OnInit: @for cards don't exist yet in OnInit, so GSAP would find nothing
  ngAfterViewInit(): void {
    gsap.from('.skills-header', {
      scrollTrigger: { trigger: '#skills', start: 'top 80%', toggleActions: 'play none none none' },
      y: 32,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    });

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
