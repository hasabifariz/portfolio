import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav
      id="navbar"
      class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-border"
      >
      <div class="container mx-auto px-8 max-w-5xl flex items-center justify-between h-16">
    
        <!-- Logo -->
        <a href="#" class="text-orange text-xl font-bold tracking-tight" style="letter-spacing:-0.03em">
          fz.
        </a>
    
        <!-- Nav Links -->
        <div class="hidden md:flex items-center gap-8">
          @for (link of navLinks; track link) {
            <a
              [href]="link.href"
              class="text-xs hover:text-orange transition-colors duration-200 tracking-wide"
              [class.text-orange]="active === link.href"
              [class.text-ink-subtle]="active !== link.href"
              [attr.aria-current]="active === link.href ? 'location' : null"
              >
              {{ link.label }}
            </a>
          }
          <a href="#contact"
            class="btn-primary text-xs px-5 py-2.5">
            contact me
          </a>
        </div>
    
        <!-- Mobile Menu Button -->
        <button
          class="md:hidden w-11 h-11 -mr-3 flex flex-col items-center justify-center gap-1.5"
          (click)="toggleMenu()"
          aria-label="Toggle menu"
          [attr.aria-expanded]="menuOpen"
          >
          <span class="block w-5 h-px bg-ink transition-all duration-200"
            [class.rotate-45]="menuOpen"
          [class.translate-y-2]="menuOpen"></span>
          <span class="block w-5 h-px bg-ink transition-all duration-200"
          [class.opacity-0]="menuOpen"></span>
          <span class="block w-5 h-px bg-ink transition-all duration-200"
            [class.-rotate-45]="menuOpen"
          [class.-translate-y-2]="menuOpen"></span>
        </button>
    
      </div>
    
      <!-- Mobile Menu -->
      @if (menuOpen) {
        <div
          class="md:hidden bg-white border-t border-orange-border px-8 py-4 flex flex-col gap-1"
          >
          @for (link of navLinks; track link) {
            <a
              [href]="link.href"
              class="text-sm py-2"
              [class.text-orange]="active === link.href"
              [class.text-ink-muted]="active !== link.href"
              (click)="menuOpen = false"
              >
              {{ link.label }}
            </a>
          }
          <a href="#contact" class="btn-primary text-xs self-start" (click)="menuOpen = false">
            contact me
          </a>
        </div>
      }
    </nav>
    `,
  styles: [`
    :host { display: block; }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      background: var(--color-orange);
      color: white;
      font-weight: 500;
      padding: 0.5rem 1.25rem;
      border-radius: 100px;
      font-family: var(--font-primary);
      transition: transform 0.2s, box-shadow 0.2s;
      text-decoration: none;
    }
    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(232,84,26,0.25);
    }
  `],
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuOpen = false;
  active = '';
  private lastScrollY = 0;
  private navbar!: HTMLElement;

  navLinks = [
    { label: 'about',      href: '#about' },
    { label: 'skills',     href: '#skills' },
    { label: 'projects',   href: '#projects' },
    { label: 'experience', href: '#experience' },
  ];

  ngOnInit(): void {
    this.navbar = document.getElementById('navbar') as HTMLElement;

    // Initial entrance animation
    gsap.from('#navbar', {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2,
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const currentY = window.scrollY;

    if (currentY > this.lastScrollY && currentY > 100) {
      // Scrolling down — hide navbar
      gsap.to('#navbar', { y: -80, duration: 0.3, ease: 'power2.in' });
    } else {
      // Scrolling up — show navbar
      gsap.to('#navbar', { y: 0, duration: 0.4, ease: 'power2.out' });
    }

    this.lastScrollY = currentY;

    // current section = last one whose top has passed below the navbar
    this.active = '';
    for (const link of this.navLinks) {
      const top = document.querySelector(link.href)?.getBoundingClientRect().top;
      if (top !== undefined && top <= 120) this.active = link.href;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  ngOnDestroy(): void {}
}
