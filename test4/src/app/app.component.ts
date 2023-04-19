import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'viewchid';
  @ViewChild('dobinput')
  dateofBirth!: ElementRef;
  @ViewChild('ageinput')
  age!: ElementRef; 

  @ViewChild(DemoComponent, { static: true })
  democomponent!: DemoComponent;
  calculateAge(){
    let birthyear=new Date(this.dateofBirth?.nativeElement.value).getFullYear();
    let curryear=new Date().getFullYear();
    // console.log(this.dateofBirth)
    // console.log(this.age);
    // console.log(this.birthyear)
    let age=curryear-birthyear;
    // console.log(age);
    this.age.nativeElement.value=age;
  }
}
