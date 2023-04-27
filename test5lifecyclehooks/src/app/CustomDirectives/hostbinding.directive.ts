import { Directive,ElementRef,Renderer2,HostBinding,Input ,HostListener} from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {
  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='pink'
  constructor(private element:ElementRef,private renderer:Renderer2) { }
  @HostBinding('style.backgroundColor') background:string=this.defaultColor;
  @HostBinding('style.border') border:string='none';
  @HostListener('mouseenter') mouseenter(){
    this.background=this.highlightColor;
    this.border='red 2px solid'
  }
  @HostListener('mouseleave') mouseLeave(){
    this.background='yellow'
    this.border='none'
  }

}
