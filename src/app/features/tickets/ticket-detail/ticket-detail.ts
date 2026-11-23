import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TicketsService } from '../../../api/tickets/tickets.service';
import { Ticket, User, Comment } from '../../../api/tickets/ticket.model';
import { StatusBadge } from '../../../shared/status-badge/status-badge';
import { PriorityBadge } from '../../../shared/priority-badge/priority-badge';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpErrorResponse } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext'
import { PIcon } from '@primeicons/angular/p-icon'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../api/users/user.service';
import { CommentsService } from '../../../api/commit/comments.service';
import { DatePipe, NgStyle } from '@angular/common';
import { map, switchMap } from 'rxjs';

interface TicketDetailComment extends Comment {
  authorName?: string;
}

@Component({
  imports: [StatusBadge, PriorityBadge, ProgressSpinnerModule, InputTextModule, DatePipe, RouterLink, ReactiveFormsModule, NgStyle],
  selector: 'app-ticket-detail',
  styleUrl: './ticket-detail.scss',
  templateUrl: './ticket-detail.html',
})
export class TicketDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private ticketsService = inject(TicketsService)
  private userService = inject(UserService)
  private commentsService = inject(CommentsService)

  ticket = signal<Ticket | null>(null)
  users = signal<User[]>([]);
  comment = signal<Comment | null>(null)
  comments = signal<Comment[]>([])
  
  ticketComments = computed<TicketDetailComment[]>(() => {
    const users = this.users();
    const comments = this.comments();

    return comments.map<Comment>(x => ({...x, authorName: users.find(u => x.authorId === u.id)?.name } ))
  })

  loading = signal(false)
  //*** */
  ticketId = Number(this.route.snapshot.paramMap.get('id'))
  /** */
  fb = inject(FormBuilder)
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    text: ['', Validators.required],
  })
  /** */
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    console.log(this.form.value);

    this.userService.createComment(this.buildComment()).subscribe({
      next: (data => {
        this.comments.update(comments => [...comments, data])
        this.form.reset();
      })
    })
  }
  /** */
  buildComment() {
    const data = this.form.getRawValue();
    const comment = {
      ticketId: this.ticketId,
      authorId: Number(data.name),
      text: data.text,
      createdAt: data.date,
    }
    console.log(comment);
    return comment
  }
  /** */
  ngOnInit() {
    this.loadTiket()
  }
  /** */
  loadTiket() {
    this.loading.set(true)
    /** */
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
    /** */
    this.userService.getAll().subscribe((data) => {
      this.users.set(data)
    })
    /** */
    this.commentsService.getAllComments().subscribe({
      next: (data) => {
        
        this.comments.set(data)
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
