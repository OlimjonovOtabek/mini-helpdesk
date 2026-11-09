import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { DialogService } from 'primeng/dynamicdialog';
import { routes } from './app.routes';
import { PRIMENG_LICENSE } from './core/primeng-license';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      license: PRIMENG_LICENSE,
      theme: {
        preset: Aura,
        options: { darkModeSelector: '.app-dark' },
      },
    }),
    MessageService,
    DialogService,
  ],
};
