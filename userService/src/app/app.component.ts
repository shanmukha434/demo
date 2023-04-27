import { Component } from '@angular/core';
import { compService } from './services/compService1';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[compService]
})
export class AppComponent {
  title = 'userService';
  constructor(private compService: compService){}

}
