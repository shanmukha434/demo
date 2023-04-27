import { Component } from '@angular/core';
import { UserService } from '../services/userService';
import { loggerService } from '../services/loggerService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService,loggerService]
})
export class UsersComponent {
  constructor(private userService:UserService,private logService:loggerService){}
  users1:{name:string,status:string}[]=[];
  ngOnInit(){
    this.users1=this.userService.users;
  }
}
