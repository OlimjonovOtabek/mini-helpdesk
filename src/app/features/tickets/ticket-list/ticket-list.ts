import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { ProgressBar } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';
import { filter, switchMap } from 'rxjs';
import { API_URL } from '../../../core/api-url';
import { ConfirmDialog, ConfirmDialogData } from '../../../shared/confirm-dialog/confirm-dialog';
import { PriorityBadge } from '../../../shared/priority-badge/priority-badge';
import { StatusBadge } from '../../../shared/status-badge/status-badge';
import { Ticket, User } from '../../../api/tickets/ticket.model';
import { TicketsService } from '../../../api/tickets/tickets.service';

@Component({
  imports: [Button, PriorityBadge, ProgressBar, StatusBadge, TableModule, Tooltip],
  selector: 'app-ticket-list',
  styleUrl: './ticket-list.scss',
  templateUrl: './ticket-list.html',
})
export class TicketList {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);
  private readonly ticketsService = inject(TicketsService);
  private readonly dialogService = inject(DialogService);
  private readonly messageService = inject(MessageService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly tickets = signal<Ticket[]>([]);
  protected readonly users = signal<User[]>([]);
  protected readonly loading = signal(true);

  constructor() {
    this.ticketsService
      .getAll()
      .pipe(takeUntilDestroyed())
      .subscribe((tickets) => {
        const sorted = [...tickets].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        this.tickets.set(sorted);
        this.loading.set(false);
      });

    this.http
      .get<User[]>(`${this.apiUrl}/users`)
      .pipe(takeUntilDestroyed())
      .subscribe((users) => this.users.set(users));
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
    const ref = this.dialogService.open<ConfirmDialog, ConfirmDialogData>(ConfirmDialog, {
      header: 'Murojaatni oʻchirish',
      width: '440px',
      modal: true,
      closable: true,
      dismissableMask: true,
      data: {
        message: `«${ticket.title}» murojaati oʻchiriladi. Davom etasizmi?`,
        confirmLabel: 'Oʻchirish',
        cancelLabel: 'Bekor qilish',
      },
    });

    ref?.onClose
      .pipe(
        filter((confirmed) => confirmed === true),
        switchMap(() => this.ticketsService.delete(ticket.id)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Murojaat oʻchirildi',
          life: 3000,
        });
      });
  }
}
