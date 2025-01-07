import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // -> Proporciona métodos para consumir servicios.

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers:[ 
              provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
              provideClientHydration(),
              provideHttpClient(withFetch())
            ]
};
