import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers:[EnrollService] //or can use in appcomponent whic is parent
})
export class AngularComponent {
  title:string="Angular";
  constructor(private enrollService:EnrollService){

  }
  onEnrolled(){
    // const enrollService=new EnrollService();
    this.enrollService.onEnroll(this.title);
  }
}
