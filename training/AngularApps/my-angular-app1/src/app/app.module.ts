import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { ProductsComponent } from './products.component';
import { TestComponent } from './test1.component';
import { Test2Component } from './test2.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ProductsComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
