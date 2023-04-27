import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './demo/demo.component';
import { ContentchildCompComponent } from './contentchild-comp/contentchild-comp.component';
// import { CustomdirectivesComponent } from './customdirectives/customdirectives.component';
import{SetBackgroundDirective} from './CustomDirectives/setBackground.directive';
import { RendererDirective } from './CustomDirectives/renderer.directive';
import { HostllistnerDirective } from './CustomDirectives/hostllistner.directive';
import { HostbindingDirective } from './CustomDirectives/hostbinding.directive';
import { CustomappclassDirective } from './CustomDirectives/customappclass.directive';
import { ConditionaldirectiveComponent } from './conditionaldirective/conditionaldirective.component';
import { ConditionaldirectiveDirective } from './conditionaldirective/highlight.directive';
import { CustomstructuraldirectiveDirective } from './CustomDirectives/customstructuraldirective.directive'
// import { HighlightDirective} from './conditionaldirective/highlight.directive'
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ContentchildCompComponent,   
    SetBackgroundDirective,
        RendererDirective,
        HostllistnerDirective,
        HostbindingDirective,
        CustomappclassDirective,
        ConditionaldirectiveComponent,
        CustomstructuraldirectiveDirective,
        
      
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
