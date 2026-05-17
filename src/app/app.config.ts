import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  BUILT_IN_ICONS_URL,
  provideKirby,
  withGlobalSetup,
} from '@kirbydesign/designsystem';
import { initializeParse } from './parse-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideKirby(withGlobalSetup()),
  ],
};
