import { HttpClient } from '@angular/common/http';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { TableLazyLoadEvent, TableModule, } from 'primeng/table';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { API_URL } from '../../../core/api-url';
import { ConfirmDialog } from '../../../shared/confirm-dialog/confirm-dialog';
import { PriorityBadge } from '../../../shared/priority-badge/priority-badge';
import { StatusBadge } from '../../../shared/status-badge/status-badge';
import { Ticket, User } from '../../../api/tickets/ticket.model';
import { TicketsService } from '../../../api/tickets/tickets.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from '../../../shared/pipe/time-ago-pipe';

@Component({
  imports: [Button, ConfirmDialog, PriorityBadge, ProgressBar, StatusBadge, TableModule, Tooltip, TooltipModule, RouterLink,DatePipe,TimeAgoPipe],
  selector: 'app-ticket-list',
  styleUrl: './ticket-list.scss',
  templateUrl: './ticket-list.html',
})
export class TicketList {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);
  private readonly ticketsService = inject(TicketsService);
  private readonly messageService = inject(MessageService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly tickets = signal<Ticket[]>([]);
  protected readonly users = signal<User[]>([]);
  protected readonly loading = signal(true);

  protected readonly deleteDialogVisible = signal(false);
  protected readonly ticketToDelete = signal<Ticket | null>(null);
  protected readonly deleteMessage = computed(
    () => `«${this.ticketToDelete()?.title ?? ''}» murojaati oʻchiriladi. Davom etasizmi?`,
  );
  page = signal(1);
  perPage = signal(10)
  first = signal(0)
  totalRecords = signal(0)

  constructor() {
    this.loadTickets()

    this.http
      .get<User[]>(`${this.apiUrl}/users`)
      .pipe(takeUntilDestroyed())
      .subscribe((users) => this.users.set(users));
  }

  loadTickets() {
    this.loading.set(true)
    this.ticketsService
      .getAll(this.page(), this.perPage())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response) => {
        const sorted = [...(response.body ?? [])].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime(),
        );

        this.tickets.set(sorted);
        const total = response.headers.get('X-Total-Count')
        if (total !== null) {
          this.totalRecords.set(Number(total));
        }
        this.loading.set(false);
      });
  }

  onPageChange(event: TableLazyLoadEvent) {
    debugger;
    
    // const first = event.first ?? 0;
    // const rows = event.rows ?? 10;
    
    // this.first.set(first);
    // this.perPage.set(rows);
    // this.page.set(Math.floor(first / rows) + 1);
    

    // console.log('Page:', page);
    // console.log('Rows:', rows);
    // console.log('First:', first);

    this.loadTickets();
  }


  protected assigneeName(assigneeId: number): string {
    return this.users().find((user) => user.id === assigneeId)?.name ?? '';
  }

  protected formatCreatedAt(ticket: Ticket): string {
    const date = new Date(ticket.createdAt);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }

  protected formatUpdatedAt(ticket: Ticket): string {
    const date = new Date(ticket.updatedAt);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }

  protected confirmDelete(ticket: Ticket): void {
    this.ticketToDelete.set(ticket);
    this.deleteDialogVisible.set(true);
  }

  protected deleteTicket(): void {
    const ticket = this.ticketToDelete();
    if (!ticket) {
      return;
    }

    this.ticketsService
      .delete(ticket.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Murojaat oʻchirildi',
          life: 3000,
        });
      });
  }
}
