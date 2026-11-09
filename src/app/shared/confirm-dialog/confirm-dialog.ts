import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

export interface ConfirmDialogData {
  message: string;
  confirmLabel: string;
  cancelLabel: string;
}

@Component({
  imports: [Button],
  selector: 'app-confirm-dialog',
  styleUrl: './confirm-dialog.scss',
  templateUrl: './confirm-dialog.html',
})
export class ConfirmDialog {
  private readonly ref = inject(DynamicDialogRef);
  protected readonly data =
    inject<DynamicDialogConfig<ConfirmDialogData>>(DynamicDialogConfig).data;

  protected close(confirmed: boolean): void {
    this.ref.close(confirmed);
  }
}
