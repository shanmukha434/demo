import { Component, Input, OnChanges,DoCheck, OnInit, SimpleChange, SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,OnDestroy,AfterViewInit,AfterViewChecked,DoCheck,AfterContentInit,AfterContentChecked{
  @Input() value:string="Shanmukha";
  constructor(){
    console.log("constructer called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
}
ngDoCheck(){
console.log("Do check called");
}
ngAfterContentInit(){
console.log("ngaftercontentcalled")
}
ngAfterContentChecked(){
 console.log("ngAfterContentCheckwd called")
}
ngAfterViewInit(){
  console.log("ngAfterViewInit called")

}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked called")
}
ngOnDestroy(){
  console.log("ngOnDestroy called")
}
}
