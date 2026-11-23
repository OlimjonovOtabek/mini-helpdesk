import { HttpClient } from '@angular/common/http';
import { inject, Injectable, } from '@angular/core';
import { API_URL } from '../../core/api-url';
import { Comment } from '../tickets/ticket.model';

@Injectable({ providedIn: 'root' })
export class CommentsService {
    private readonly http = inject(HttpClient);
    private readonly baseUrll = `${inject(API_URL)}/comments`;
    /** */
    getAllComments(){
        return this.http.get<Comment[]>(this.baseUrll)
    }
}
