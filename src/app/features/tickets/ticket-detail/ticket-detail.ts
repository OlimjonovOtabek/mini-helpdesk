import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../../api/tickets/tickets.service';
import { Ticket, User } from '../../../api/tickets/ticket.model';
import { StatusBadge } from '../../../shared/status-badge/status-badge';
import { PriorityBadge } from '../../../shared/priority-badge/priority-badge';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  imports: [StatusBadge, PriorityBadge, ProgressSpinnerModule],
  selector: 'app-ticket-detail',
  styleUrl: './ticket-detail.scss',
  templateUrl: './ticket-detail.html',
})
export class TicketDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private ticketsService = inject(TicketsService)
  ticket = signal<Ticket | null>(null)
  users = signal<User[]>([]);
  loading = signal(false)
  //*** */
  ticketId = Number(this.route.snapshot.paramMap.get('id'))
  /** */
  ngOnInit() {
    this.loadTiket()
  }
  loadTiket() {
    this.loading.set(true)
    this.ticketsService.getById(this.ticketId).subscribe({
      next: (data) => {
        this.ticket.set(data);
        this.loading.set(false);
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        
        console.log(err.message);
        if (err.status === 404) {
          this.router.navigate(['**']);
        } else {
          console.error('Ошибка загрузки заявки:', err);
        }
      }

    })
  }
  protected assigneeName(assigneeId: number): string {
    return this.users().find((user) => user.id === assigneeId)?.name ?? '';
  }
}
