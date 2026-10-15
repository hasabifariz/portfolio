import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMAIL, LINKEDIN } from '../../data/profile';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- vertical padding lives on wrappers: global .container resets padding to 0 2rem -->
    <footer id="contact" class="bg-ink text-white">
      <div class="py-24">
      <div class="container mx-auto px-8 max-w-5xl">
        <div class="section-eyebrow">get in touch</div>
        <h2 class="section-title !text-white max-w-xl">
          Got a role or project in <span>mind?</span>
        </h2>
        <p class="text-sm !text-white/75 max-w-md mt-4 mb-8">
          Send me an email or a message on LinkedIn. I'm open to front-end
          roles and contract work.
        </p>

        <div class="flex flex-wrap items-center gap-4">
          <a [href]="'mailto:' + email" class="btn-primary">
            email me <span aria-hidden="true">→</span>
          </a>
          <a [href]="linkedin" target="_blank" rel="noopener noreferrer"
             class="btn-outline !text-white !border-white/30 hover:!bg-white/10">
            linkedin <span aria-hidden="true">↗</span>
          </a>
          <button type="button" (click)="copyEmail()"
                  class="text-xs text-white/75 hover:text-orange transition-colors underline underline-offset-4 decoration-white/30 px-2 py-3">
            {{ copied ? 'copied ✓' : email }}
          </button>
          <span class="sr-only" aria-live="polite">{{ copied ? 'Email address copied' : '' }}</span>
        </div>
      </div>
      </div>

      <div class="border-t border-white/10 py-6">
        <div class="container mx-auto px-8 max-w-5xl flex items-center justify-between gap-4">
          <div class="text-orange text-xl font-bold" style="letter-spacing:-0.03em;">fz.</div>
          <div class="text-xs text-white/70" style="font-size:0.6875rem;">
            {{ year }} · Fariz · Built with Angular + GSAP
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`:host { display: block; }`],
})
export class FooterComponent {
  year = new Date().getFullYear();
  email = EMAIL;
  linkedin = LINKEDIN;
  copied = false;

  copyEmail(): void {
    navigator.clipboard?.writeText(this.email).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }
}
