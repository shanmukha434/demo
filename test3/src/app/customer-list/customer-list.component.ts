import { Component } from '@angular/core';
import { Customer } from './customer';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
 selectedCustomer: any;
 customers:Customer[]=[
  {customerNo: 1, name: 'Mark Vought', course: 'Angular', city: 'London', country: 'UK'},
    {customerNo: 2, name: 'John Smith', course: 'Javascript', city: 'New York', country: 'USA'},
    {customerNo: 3, name: 'Merry Ann', course: 'HTMl', city: 'Berlin', country: 'Germany'},
    {customerNo: 4, name: 'Rajesh Khatri', course: 'Java', city: 'Mumbai', country: 'India'},
    {customerNo: 5, name: 'Rahul Raj', course: 'Ruby', city: 'Delhi', country: 'India'}
 ]

}
