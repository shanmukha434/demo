import{Directive,OnInit,ElementRef} from '@angular/core';
@Directive({
    selector:'[setBackground]'
})
export class SetBackgroundDirective implements OnInit{
   
    constructor(private element:ElementRef){
       this.element=element
    }
    ngOnInit(){
        this.element.nativeElement.style.backgroundColor="Green"
    }
}