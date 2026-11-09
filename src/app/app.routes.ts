import { Routes } from '@angular/router';
import { NotFound } from './core/not-found/not-found';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tickets' },
  {
    path: 'tickets',
    loadChildren: () => import('./features/tickets/tickets.routes').then((m) => m.ticketsRoutes),
  },
  { path: '**', component: NotFound, title: 'Sahifa topilmadi | Mini Helpdesk' },
];
