import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../core/api-url';
import { Comment, User } from '../tickets/ticket.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${inject(API_URL)}/users`;
  private readonly commentsUrl  =`${inject(API_URL)}/comments`

  getPaged(page: number, perPage: number): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(this.baseUrl, {
      params: {
        // _page: page,
        // _per_page: perPage
      },
      observe: 'response'
    });
  }

  getAll() {
    return this.http.get<User[]>(this.baseUrl);
  }

  createComment(data:Omit<Comment,'id'>) { 
    return this.http.post<Comment>(this.commentsUrl,data)
  }


  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
