import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 slogan:string="Your one step for everything";
 image:string="/assets/shopping.jpg"
 getSlogan(){
  return "This is new slogan"
 }
}
