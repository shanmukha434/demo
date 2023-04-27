import { Component } from '@angular/core';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css'],
  // providers:[UserService]
})
export class AddusersComponent {
  username:string=""
  status:string="active"
 constructor(private userService:UserService){}

 addUser(){
  this.userService.addUser(this.username,this.status)
  console.log(this.userService.users)
 }
}
