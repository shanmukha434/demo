import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appCustomstructuraldirective]'
})
export class CustomstructuraldirectiveDirective {

  // what to remove or add
  // from where to add ro remove
  constructor(private template:TemplateRef<any>,private viewContainer:ViewContainerRef) { }

  @Input('appCustomstructuraldirective') set displaView(condition:boolean){
      if(condition){
        this.viewContainer.createEmbeddedView(this.template);
      }
      else{
        this.viewContainer.clear();
      }

  }
}
