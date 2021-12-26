import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    template: `
  <div style = "d-flex justify-content-between;">
  <button class="btn btn-primary rounded-circle" (click) = "increment()" >+</button>
  <div class="m-3" style="display: inline-block;">{{count}}</div>
  
  <button class="btn btn-danger rounded-circle" (click)="decrement()">-</button> 
</div>
  `,
})
export class CounterComponent {
    public count = 0;

    constructor() { }

    increment() {
        this.count++;
    }
    decrement() {
        if (this.count > 0) this.count--;
    }
}
