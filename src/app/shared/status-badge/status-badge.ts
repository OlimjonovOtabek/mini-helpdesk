import { Component, computed, input } from '@angular/core';

const STATUS_CONFIG: Record<string, { label: string; tone: string }> = {
  new: { label: 'Yangi', tone: 'info' },
  in_progress: { label: 'Jarayonda', tone: 'warning' },
  solved: { label: 'Hal qilingan', tone: 'success' },
  closed: { label: 'Yopilgan', tone: 'neutral' },
};

@Component({
  selector: 'app-status-badge',
  styleUrl: './status-badge.scss',
  templateUrl: './status-badge.html',
})
export class StatusBadge {
  readonly status = input.required<string>();
  readonly config = computed(() => STATUS_CONFIG[this.status()] ?? STATUS_CONFIG['new']);
}
