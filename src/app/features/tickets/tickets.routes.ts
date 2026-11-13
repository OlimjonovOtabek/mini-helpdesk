import { Routes } from '@angular/router';
import { TicketDetail } from './ticket-detail/ticket-detail';
import { NotFound } from '../../core/not-found/not-found';


export const ticketsRoutes: Routes = [
  {
    path: '',
    loadComponent:()=> import('./ticket-list/ticket-list').then(m => m.TicketList),
    title: 'Murojaatlar | Mini Helpdesk'
  },
  {
    path: ':id',
    loadComponent:()=> import('./ticket-detail/ticket-detail').then(m => m.TicketDetail),
    title: 'Murojaat tafsilotlari | Mini Helpdesk'
  },
];
