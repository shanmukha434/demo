import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers:[EnrollService]  //or use in app component which is parent
})
export class JavascriptComponent {
  title:string="Javascript";
  constructor(private enrollService:EnrollService){}
  onEnrolled(){
    // const enrollService=new EnrollService();
    this.enrollService.onEnroll(this.title)
  }
}
