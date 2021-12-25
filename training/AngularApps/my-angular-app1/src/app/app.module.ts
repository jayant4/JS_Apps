import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { ProductsComponent } from './products.component';
import { TestComponent } from './test1.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ProductsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
