import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Priority } from '../../features/tickets/ticket.model';
import { PriorityBadge } from './priority-badge';

describe('PriorityBadge', () => {
  let fixture: ComponentFixture<PriorityBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriorityBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(PriorityBadge);
  });

  const cases: [Priority, string][] = [
    ['low', 'Past'],
    ['medium', 'Oʻrta'],
    ['high', 'Yuqori'],
    ['urgent', 'Shoshilinch'],
  ];

  it.each(cases)('should render label for "%s" priority', async (priority, label) => {
    fixture.componentRef.setInput('priority', priority);
    await fixture.whenStable();

    const badge = (fixture.nativeElement as HTMLElement).querySelector('.badge');
    expect(badge?.textContent?.trim()).toBe(label);
  });
});
