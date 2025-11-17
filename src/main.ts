import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { inject } from '@vercel/analytics';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => inject())
  .catch((err) => console.error(err));
