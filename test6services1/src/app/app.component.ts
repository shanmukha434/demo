import { Component } from '@angular/core';
import { EnrollService } from './services/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[EnrollService] //or can use in appModule 
})
export class AppComponent {
  title = 'test6services1';
  constructor(private enrollService:EnrollService){}

// this is for 
}
