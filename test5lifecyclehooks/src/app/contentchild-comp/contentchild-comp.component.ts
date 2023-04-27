import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentchild-comp',
  templateUrl: './contentchild-comp.component.html',
  styleUrls: ['./contentchild-comp.component.css']
})
export class ContentchildCompComponent implements OnInit,AfterContentInit{
  ngOnInit(){
    console.log(this.paragrapghEl);
  }
  ngAfterContentInit(){
    console.log(this.paragrapghEl.nativeElement.textContent);
    this.paragrapghEl.nativeElement.textContent="this is changed in paragrapgh1"
  }
@ContentChild('para') paragrapghEl!:ElementRef;
}
