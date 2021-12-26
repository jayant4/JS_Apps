import { Component } from '@angular/core';

@Component({
    selector: 'products',
    template: `
  <div class="row" >
      <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 " *ngFor ="let product of products">
          <div class="card mt-3 mb-3"          >
          <div class="card-header">
              <h2>{{product.name}}</h2>
          </div>
 
          <div class="card-body">
              <h4>{{product.price}}</h4>
          </div>

          <counter></counter>
          </div>
      </div>
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
