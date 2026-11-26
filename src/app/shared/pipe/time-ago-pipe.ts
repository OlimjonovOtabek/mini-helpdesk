import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | Date): string {
    const now = Date.now();
    const date = new Date(value).getTime();

    const seconds = Math.floor((now - date) / 1000);
    const minut = Math.floor((seconds) / 60)
    const hours = Math.floor(minut / 60)
    const day = Math.floor(hours / 24)

    if (seconds < 60) {
      return 'Hozirgina'
    }
    if (minut < 60) {
      return `${minut} daqiqa oldin`
    }
    if (hours < 24) {
      return `${hours} soat oldin`
    }
    if (day === 1) {
      return 'kecha'
    }
    return new Date(value).toLocaleDateString('ru-RU')
  }
}
