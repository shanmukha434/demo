import { Component, OnInit } from '@angular/core';
import { compService } from '../services/compService1';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private compService:compService ) { }

  users: {name: string, job: string, gender: string, country: string, age: number, avatar: string}[] = [];

  ngOnInit(): void {
    this.users = this.compService.users;
  }

  ShowDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
    this.compService.onShowUserDetails(user);
  }
}
