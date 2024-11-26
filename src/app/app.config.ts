import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // -> Proporciona métodos para consumir servicios.

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers:[ 
              provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes),
              provideClientHydration(),
              provideHttpClient()
            ]
};
