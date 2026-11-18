import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../core/api-url';
import { PaginatedTickets, Ticket } from './ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${inject(API_URL)}/tickets`;

  getAll(page: number, perPage: number): Observable<HttpResponse<Ticket[]>> {
    return this.http.get<Ticket[]>(this.baseUrl,{
      params: {
      // _page: page,
      // _per_page: perPage
    },
     observe: 'response'
    });
  }

  getById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
