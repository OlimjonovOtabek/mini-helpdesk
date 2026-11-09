import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { API_URL } from '../../core/api-url';
import { Ticket } from './ticket.model';
import { TicketsService } from './tickets.service';

const ticket: Ticket = {
  id: 7,
  title: 'Printer ishlamayapti',
  description: 'Printer yoqilmayapti.',
  status: 'new',
  priority: 'medium',
  category: 'Printer',
  requesterId: 4,
  assigneeId: null,
  createdAt: '2026-11-01T09:00:00Z',
  updatedAt: '2026-11-01T09:00:00Z',
};

describe('TicketsService', () => {
  let service: TicketsService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: API_URL, useValue: 'http://api.test' },
      ],
    });

    service = TestBed.inject(TicketsService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('getAll should send GET request to /tickets', () => {
    let result: Ticket[] | undefined;
    service.getAll().subscribe((tickets) => (result = tickets));

    const req = httpTesting.expectOne('http://api.test/tickets');
    expect(req.request.method).toBe('GET');
    req.flush([ticket]);

    expect(result).toEqual([ticket]);
  });

  it('delete should send DELETE request to /tickets/:id', () => {
    let completed = false;
    service.delete(7).subscribe({ complete: () => (completed = true) });

    const req = httpTesting.expectOne('http://api.test/tickets/7');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);

    expect(completed).toBe(true);
  });
});
