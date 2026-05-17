import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { initializeParse } from './app/parse-config';

initializeParse();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
