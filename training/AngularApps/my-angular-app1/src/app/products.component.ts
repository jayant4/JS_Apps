import { Component } from '@angular/core';

@Component({
  selector: 'products',
  template: `
  <div *ngFor ="let product of products"
  style="display:inline-block; border:1px solid red; margin:10px; 
  padding:10px;">
  <h2>{{product.name}}</h2>
  <hr/>
  <h4>{{product.price}}</h4>
  <hr/>
  <counter></counter>
  </div>

  `,
})
export class ProductsComponent {
  public products = [
    { name: 'iphone', price: 999 },
    { name: 'ipad', price: 799 },
    { name: 'macbook air', price: 999 },
    { name: 'macbook pro', price: 1999 },
  ];
}
