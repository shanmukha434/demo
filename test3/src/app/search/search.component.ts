import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 searchVal:string="";
 @Output() searchedText:EventEmitter<string>=new EventEmitter<string>();
 onSearchChange(){
  this.searchedText.emit(this.searchVal);
 }


}
