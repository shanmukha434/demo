import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
// import { ProductsforngComponent } from './productsforng/productsforng.component';
import { ProductsforngcontentComponent } from './productsforngcontent/productsforngcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Comp1Component,
    Comp2Component,
   
    ProductsforngcontentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
