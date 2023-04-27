import { Component } from '@angular/core';
import { compService } from '../services/compService1';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  providers:[compService]
})
export class Comp2Component {
  constructor(private compService:compService ){}
  users: { name: string; job: string; gender: string; country: string; age: number; avatar: string; }[]=[]
  ngOnInit(){
    this.users=this.compService.users;
  }
  showDetails(user:{ name: string; job: string; gender: string; country: string; age: number; avatar: string; }){
    this.compService.onShowUserDetails(user);
  }
 }

