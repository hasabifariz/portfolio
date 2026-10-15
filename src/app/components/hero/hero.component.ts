import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HERO_STACK, CV_PATH } from '../../data/profile';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="hero"
      class="relative isolate overflow-hidden min-h-screen flex flex-col bg-orange-warm pt-24 pb-8"
    >
      <!-- Goo blob background -->
      <svg width="0" height="0" aria-hidden="true" class="absolute">
        <filter id="hero-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
          <feColorMatrix in="blur" mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -11" />
        </filter>
      </svg>
      <div class="stage" aria-hidden="true">
        <div class="orbit o1"><div class="blob one"></div></div>
        <div class="orbit o2"><div class="blob two"></div></div>
      </div>
      <div class="glass" aria-hidden="true"></div>

      <!-- Content -->
      <div class="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">

        <a href="#contact"
           class="hero-anim opacity-0 inline-flex items-center gap-2 rounded-full border border-orange-border bg-white/70 backdrop-blur px-4 py-2 mb-8 text-xs text-ink-soft hover:border-orange transition-colors">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 motion-safe:animate-ping"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Available for work
          <span class="text-orange" aria-hidden="true">→</span>
        </a>

        <h1 class="hero-anim opacity-0 text-5xl md:text-7xl font-bold text-ink mb-6"
            style="letter-spacing:-0.035em; line-height:1.05;">
          Hi, I'm <span class="text-orange">Fariz</span>.<br />
          I build web things.
        </h1>

        <p class="hero-anim opacity-0 text-base md:text-lg text-ink-soft max-w-xl mb-8">
          Frontend developer making internal tools for logistics, finance and
          retail teams. These days I work on a warehouse management system
          from Tangerang, Indonesia.
        </p>

        <ul class="hero-anim opacity-0 flex flex-wrap justify-center gap-2 mb-10" aria-label="Tech stack">
          <li *ngFor="let tech of stack"
              class="rounded-full bg-white/60 backdrop-blur border border-orange-border/70 px-3 py-1 text-xs text-ink-muted">
            {{ tech }}
          </li>
        </ul>

        <div class="hero-anim opacity-0 flex flex-wrap justify-center gap-4">
          <a href="#projects" class="btn-primary">view projects <span aria-hidden="true">→</span></a>
          <a [href]="cvPath" download class="btn-outline bg-white/60 backdrop-blur">download cv</a>
        </div>
      </div>

      <!-- Stats -->
      <div class="hero-anim opacity-0 w-full max-w-3xl mx-auto px-6 mt-16">
        <dl class="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-orange-border bg-white/60 backdrop-blur-md divide-orange-border/70 md:divide-x">
          <div *ngFor="let stat of stats" class="flex flex-col-reverse items-center py-4 px-2">
            <dt class="text-ink-subtle tracking-widest uppercase mt-1" style="font-size:0.625rem;">{{ stat.label }}</dt>
            <dd class="text-2xl font-bold text-orange">{{ stat.display }}</dd>
          </div>
        </dl>
      </div>

      <a href="#about"
         class="hero-anim opacity-0 mx-auto mt-8 flex flex-col items-center gap-2 text-ink-faint hover:text-orange transition-colors tracking-widest uppercase"
         style="font-size:0.625rem;">
        scroll to explore
        <span class="block w-px h-8 bg-current motion-safe:animate-pulse"></span>
      </a>
    </section>
  `,
  styles: [`
    :host { display: block; }

    .stage {
      position: absolute;
      inset: -8vmin;
      z-index: -2;
      filter: url(#hero-goo);
    }
    /* each blob orbits the centre, and drifts on its own path inside that orbit */
    .orbit {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      will-change: transform;
    }
    .o1 { animation: turn 13s linear infinite; }
    .o2 { animation: turn 19s linear infinite reverse; }
    @keyframes turn { to { transform: rotate(360deg); } }

    .blob { opacity: .6; will-change: transform, border-radius; }
    .blob.one {
      width: 38vmin; height: 38vmin;
      background: #E8541A;
      border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%;
      animation: driftOne 7s cubic-bezier(.45,.05,.55,.95) infinite, morphOne 5s ease-in-out infinite;
    }
    .blob.two {
      width: 30vmin; height: 30vmin;
      background: #F5A070;
      border-radius: 63% 37% 41% 59% / 55% 62% 38% 45%;
      animation: driftTwo 9s cubic-bezier(.6,.1,.3,.9) infinite, morphTwo 7s ease-in-out infinite;
    }
    @keyframes driftOne {
      0%, 100% { transform: translate(14vmin, -6vmin) scale(1); }
      26%      { transform: translate(26vmin,  6vmin) scale(1.14); }
      51%      { transform: translate(5vmin,  10vmin) scale(.9); }
      79%      { transform: translate(20vmin, -4vmin) scale(1.07); }
    }
    @keyframes driftTwo {
      0%, 100% { transform: translate(-12vmin,  8vmin) scale(1); }
      31%      { transform: translate(-25vmin, -5vmin) scale(1.18); }
      57%      { transform: translate(-4vmin, -11vmin) scale(.88); }
      82%      { transform: translate(-19vmin,  4vmin) scale(1.06); }
    }
    @keyframes morphOne {
      0%, 100% { border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%; }
      50%      { border-radius: 58% 42% 34% 66% / 62% 38% 62% 38%; }
    }
    @keyframes morphTwo {
      0%, 100% { border-radius: 63% 37% 41% 59% / 55% 62% 38% 45%; }
      50%      { border-radius: 38% 62% 66% 34% / 40% 45% 55% 60%; }
    }

    /* frosted pane over the blobs keeps body text readable */
    .glass {
      position: absolute;
      inset: 0;
      z-index: -1;
      background: rgba(255, 248, 244, .3);
      backdrop-filter: blur(40px) saturate(125%);
      -webkit-backdrop-filter: blur(40px) saturate(125%);
    }
    @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
      .stage { filter: url(#hero-goo) blur(40px); }
    }

    @media (prefers-reduced-motion: reduce) {
      .orbit, .blob { animation: none; }
    }
  `],
})
export class HeroComponent implements AfterViewInit {

  stack = HERO_STACK;
  cvPath = CV_PATH;

  stats = [
    { display: '4+',  label: 'years exp' },
    { display: '9+',  label: 'projects' },
    { display: '15+', label: 'tech stack' },
    { display: '∞',   label: 'coffee cups' },
  ];

  ngAfterViewInit(): void {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.fromTo('.hero-anim',
      { opacity: 0, y: reduce ? 0 : 32 },
      { opacity: 1, y: 0, duration: reduce ? 0 : 0.7, ease: 'power3.out', stagger: 0.1, delay: 0.3, clearProps: 'transform' },
    );
  }
}
