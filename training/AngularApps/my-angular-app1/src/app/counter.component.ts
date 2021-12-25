import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
  <div style = "display:inline-block;">
  <button (click) = "increment()" >Increment</button>
  <h3>{{count}}</h3>
  <button (click)="decrement()">Decrement</button>
  
  </div>
  `,
})
export class CounterComponent {
  public count = 0;

  constructor() {}

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
