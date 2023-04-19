import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeadersComponent } from './headers/headers.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeadersComponent,
    SearchComponent,
    FilterComponent,
    DemoComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
