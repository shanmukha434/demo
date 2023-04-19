import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  // selector: '[app-nav]',//this is html attribtute seelctor
  // selector: '.app-nav',//this is css attribtute seelctor
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  sitename:string="eShopping";
}
