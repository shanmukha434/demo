import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { userService } from '../userServices/userService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[userService]
})
export class UsersComponent {
  constructor(private userService:userService){}
  users1:{name:string,status:string}[]=[];
  ngOnInit(){
    this.users1=this.userService.users;
  }
}
