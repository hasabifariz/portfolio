import { bootstrapApplication } from '@angular/platform-browser';
import { gsap } from 'gsap';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Reduced motion: run every GSAP tween near-instantly, so content still appears but nothing slides in
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(100);
}

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
