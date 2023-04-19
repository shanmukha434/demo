import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
 @Input() all:number=0;
 @Input() free:number=0;
 @Input() premium:number=0;

 selectedRadioButtenVal:string='All';
@Output() filterRadioChanged:EventEmitter<string>=new EventEmitter<string>()
onRadioSelection(){
this.filterRadioChanged.emit(this.selectedRadioButtenVal);
// console.log(this.selectedRadioButtenVal);
}
}
