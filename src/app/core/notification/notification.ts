import { inject, Injectable, } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class Notification {
    private messageService = inject(MessageService)
    
    private readonly life = 3000

    success(message: string): void {
        this.messageService.add({
            severity: 'success',
            summary: 'Muvaffaqiyatli',
            detail: message,
            life: this.life
        })
    }
    error(message: string): void {
        this.messageService.add({
            severity: 'error',
            summary: 'Xatolok',
            detail: message,
            life: this.life
        })
    }
    info(message: string): void {
        this.messageService.add({
            severity: 'info',
            summary: "Ma'lumot",
            detail: message,
            life: this.life
        })
    }
}
