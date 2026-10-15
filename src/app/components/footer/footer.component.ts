import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_LINKS } from '../../data/profile';

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
             class="text-xs text-white/70 hover:text-orange transition-colors duration-200 font-light">
            {{ link.label }}
          </a>
        </div>

        <div class="text-xs text-white/50 font-light" style="font-size:0.6875rem;">
          {{ year }} · Fariz · Built with Angular + GSAP
        </div>

      </div>
    </footer>
  `,
  styles: [`:host { display: block; }`],
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = CONTACT_LINKS;
}
