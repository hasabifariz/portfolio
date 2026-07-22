import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="hero"
      class="min-h-screen flex flex-col justify-center bg-orange-warm pt-16"
    >
      <div class="container mx-auto px-8 max-w-5xl">

        <div class="hero-eyebrow section-eyebrow opacity-0">
          Frontend Developer
        </div>

        <h1 class="hero-title opacity-0 text-5xl md:text-7xl font-bold text-ink mb-3"
            style="letter-spacing:-0.025em; line-height:1.05;">
          Hi, I'm <span class="text-orange">Fariz</span><br />
          I build web things.
        </h1>

        <p class="hero-subtitle opacity-0 text-sm md:text-base text-ink-muted font-light mb-3 tracking-wide">
          Angular · Tailwind CSS · TypeScript · GSAP
        </p>

        <p class="hero-desc opacity-0 text-sm text-ink-muted font-light max-w-md mb-10"
           style="line-height:1.9;">
          Building internal web applications for logistics, finance, and retail —
          currently in Angular and TypeScript on a warehouse management system.
          Based in Tangerang, Indonesia.
        </p>

        <div class="hero-btns opacity-0 flex flex-wrap gap-3">
          <a href="#projects" class="btn-primary">view projects</a>
          <a href="/assets/Fariz-Hasabi-Adiwijaya-CV.pdf" download class="btn-outline">download cv</a>
        </div>

        <!-- Scroll indicator -->
        <div class="hero-scroll opacity-0 flex items-center gap-3 mt-16">
          <div class="w-8 h-px bg-orange-border"></div>
          <span class="text-ink-faint text-xs tracking-widest uppercase"
                style="font-size:0.625rem;">scroll to explore</span>
        </div>

      </div>

      <!-- Stats strip -->
      <div class="hero-stats opacity-0 w-full bg-orange mt-16 md:mt-20">
        <div class="container mx-auto px-8 max-w-5xl">
          <div class="grid grid-cols-4 divide-x divide-white/20 py-4">
            <div *ngFor="let stat of stats"
                 class="text-center py-2 stat-item">
              <div class="text-2xl font-bold text-white stat-num"
                   [attr.data-target]="stat.value">{{ stat.display }}</div>
              <div class="text-xs text-white/60 mt-0.5 font-light tracking-widest uppercase"
                   style="font-size:0.625rem;">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class HeroComponent implements OnInit {

  stats = [
    { display: '4+',  value: 4,  label: 'years exp' },
    { display: '9+',  value: 9,  label: 'projects' },
    { display: '15+', value: 15, label: 'tech stack' },
    { display: '∞',   value: 0,  label: 'coffee cups' },
  ];

  ngOnInit(): void {
    this.animateHero();
  }

  private animateHero(): void {
    const tl = gsap.timeline({ delay: 0.5 });

    // Stagger entrance of each hero element
    tl.to('.hero-eyebrow', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'transform',
      })
      .to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'transform',
      }, '-=0.3')
      .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'transform',
      }, '-=0.4')
      .to('.hero-desc', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'transform',
      }, '-=0.4')
      .to('.hero-btns', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'transform',
      }, '-=0.3')
      .to('.hero-scroll', {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.2')
      .to('.hero-stats', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        clearProps: 'transform',
      }, '-=0.4');

    // Set initial translateY for all animated elements
    gsap.set([
      '.hero-eyebrow',
      '.hero-title',
      '.hero-subtitle',
      '.hero-desc',
      '.hero-btns',
      '.hero-stats',
    ], { y: 40 });
  }
}
