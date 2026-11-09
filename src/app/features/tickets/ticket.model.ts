export type TicketStatus = 'new' | 'in_progress' | 'resolved' | 'closed';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type UserRole = 'admin' | 'technician' | 'requester';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  priority: Priority;
  category: string;
  requesterId: number;
  assigneeId: number | null;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

export interface User {
  id: number;
  name: string;
  role: UserRole;
}

export interface Category {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  ticketId: number;
  authorId: number;
  text: string;
  createdAt: string;
}
