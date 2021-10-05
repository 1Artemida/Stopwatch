import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, buffer, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {

  constructor() { }

  public timer = 0;
  public timerNumber: number = 0;
  public pauseSubscription = new BehaviorSubject(0);
  public interval: any;

  ngOnInit(): void {
    this.pauseSubscription
      .pipe(
        buffer(this.pauseSubscription.pipe(debounceTime(300))),
        map(list => list.length),
        filter(x => x === 2)
      )
      .subscribe(() =>{
        clearInterval(this.interval);
    })
  }

  public startTimer() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.timer++;
      }, 1000)
    }
  }

  public stopTimer() {
      clearInterval(this.interval);
      this.interval = null;
      this.timer = 0;
  }
  
  public resetTimer() {
    this.timer = 0;
  }

  public pause() {
    this.pauseSubscription.next(0);
  }
}
