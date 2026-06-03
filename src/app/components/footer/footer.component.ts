import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="contact" class="bg-ink py-10">
      <div class="container mx-auto px-8 max-w-5xl flex flex-col md:flex-row
                  items-center justify-between gap-4">

        <div class="text-orange text-xl font-bold" style="letter-spacing:-0.03em;">fz.</div>

        <div class="flex gap-6">
          <a *ngFor="let link of links"
             [href]="link.href"
             target="_blank"
             rel="noopener noreferrer"
             class="text-xs text-ink-subtle hover:text-orange transition-colors duration-200 font-light">
            {{ link.label }}
          </a>
        </div>

        <div class="text-xs text-ink-soft font-light" style="font-size:0.6875rem;">
          {{ year }} · Fariz · Built with Angular + GSAP
        </div>

      </div>
    </footer>
  `,
  styles: [`:host { display: block; }`],
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = [
    { label: 'github',   href: 'https://github.com/' },
    { label: 'linkedin', href: 'https://linkedin.com/' },
    { label: 'email',    href: 'mailto:fariz@email.com' },
  ];
}
