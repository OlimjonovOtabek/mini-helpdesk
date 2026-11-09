import { Routes } from '@angular/router';
import { TicketList } from './ticket-list/ticket-list';

export const ticketsRoutes: Routes = [
  { path: '', component: TicketList, title: 'Murojaatlar | Mini Helpdesk' },
];
