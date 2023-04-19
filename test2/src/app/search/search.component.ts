import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue:string="";
  changeSearchValue(e:any){
   this.searchValue=e.target.value;
  }
}
