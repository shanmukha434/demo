import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test5lifecyclehooks';
  inpuText:string="";
  destroy:boolean=true;
condition1: any;
condition2: any;
  onSubmit(inpurEl:HTMLInputElement){
  this.inpuText=inpurEl.value;
   
  }
  DestroyedComponent(){
    this.destroy=false;
  }

  // this is for custom structural directive
  display:boolean=false;
  displayed(){
    this.display=true;
    // console.log("display")
  }

  // this is for ngSwitch
  occupation:string="teacher";

}
