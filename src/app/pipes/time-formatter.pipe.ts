import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormatter'
})
export class TimeFormatterPipe implements PipeTransform {

  transform(value: number): string {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (value >= 60) {
      minutes = Math.floor(value / 60);
    }
    if (minutes >= 60) {
      hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
    seconds = value % 60;

    return `${this.formatNumbers(hours)}:${this.formatNumbers(minutes)}:${this.formatNumbers(seconds)}`;
  }

  private formatNumbers(number: number): string {
    return String(number).length < 2 ? '0' + number : String(number);
  }

}
