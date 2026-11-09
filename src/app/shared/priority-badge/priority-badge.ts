import { Component, computed, input } from '@angular/core';
import { Priority } from '../../api/tickets/ticket.model';

const PRIORITY_CONFIG: Record<Priority, { label: string; tone: string }> = {
  low: { label: 'Past', tone: 'neutral' },
  medium: { label: 'Oʻrta', tone: 'info' },
  high: { label: 'Yuqori', tone: 'orange' },
  urgent: { label: 'Shoshilinch', tone: 'danger' },
};

@Component({
  selector: 'app-priority-badge',
  styleUrl: './priority-badge.scss',
  templateUrl: './priority-badge.html',
})
export class PriorityBadge {
  readonly priority = input.required<Priority>();
  readonly config = computed(() => PRIORITY_CONFIG[this.priority()]);
}
