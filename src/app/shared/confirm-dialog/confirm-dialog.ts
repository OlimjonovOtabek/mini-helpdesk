import { Component, input, model, output } from '@angular/core';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
  imports: [Button, Dialog],
  selector: 'app-confirm-dialog',
  styleUrl: './confirm-dialog.scss',
  templateUrl: './confirm-dialog.html',
})
export class ConfirmDialog {
  readonly visible = model(false);
  readonly header = input.required<string>();
  readonly message = input.required<string>();
  readonly confirmLabel = input('Tasdiqlash');
  readonly cancelLabel = input('Bekor qilish');

  readonly confirmed = output<void>();

  protected confirm(): void {
    this.visible.set(false);
    this.confirmed.emit();
  }

  protected cancel(): void {
    this.visible.set(false);
  }
}
