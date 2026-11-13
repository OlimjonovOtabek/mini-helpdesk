import { Routes } from '@angular/router';
import { NotFound } from './core/not-found/not-found';
import { ticketsRoutes } from './features/tickets/tickets.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: 'tickets',
    children:  ticketsRoutes,
  },
  {
    path: 'not-found',
    component: NotFound,
  },
  { path: '**', component: NotFound, title: 'Sahifa topilmadi | Mini Helpdesk' },
];
