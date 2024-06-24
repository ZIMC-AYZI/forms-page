import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainingTimer',
  standalone: true,
})
export class RemainingTimerPipe implements PipeTransform {
  transform(duration: number | null): string {
    if (!duration) {
      return '0:00';
    }

    return `0:${duration > 9 ? duration : '0' + duration}`;
  }
}
