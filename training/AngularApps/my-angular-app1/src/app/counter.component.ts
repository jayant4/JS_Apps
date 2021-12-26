import { Component, Input } from '@angular/core';

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

    @Input() // to recieve data from the parent component we need this decorator
    public max = 0; // public variable declared to recieve data from parent component

    constructor() { }

    increment() {
        if (this.count < this.max) ++this.count;
    }
    decrement() {
        if (this.count > 0) this.count--;
    }
}
