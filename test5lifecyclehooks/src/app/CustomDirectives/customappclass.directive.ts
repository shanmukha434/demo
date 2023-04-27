import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomappclass]'
})
export class CustomappclassDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }
  @Input() set display(value:object){
    let entries=Object.entries(value)
    entries.forEach(element => {
      if(element[1]){
        this.renderer.addClass(this.element.nativeElement,element[0])
      }
    });

  }
}
