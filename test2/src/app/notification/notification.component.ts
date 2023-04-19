import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:  `
    <!-- <div class="container alert alert-warning" > -->
    <div class=" alert alert-success" [ngClass]="{fadeOut:displayNotification}">
      <p>This website uses cookies for better experience</p>
      <div class="close">
        <button class="btn" (click)="closeNotification()">X</button>
      </div>
    </div>
    
  `,
  styles:[".alert{margin:10px 0px;text-align:center;padding:10px 20px;background-color:paleyellow}"," p{font-size: 14px;}",
  ".close{float:right;margin-top:-45px;}",
  ".fadeOut {visibility: hidden;opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {
displayNotification:boolean=false;
closeNotification(){
  this.displayNotification=true;
}
}
