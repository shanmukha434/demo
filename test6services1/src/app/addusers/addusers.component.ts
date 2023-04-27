import { Component } from '@angular/core';
import { userService } from '../userServices/userService';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css'],
  providers:[userService]
})
export class AddusersComponent {
  username:string=""
  status:string="active"
 constructor(private userService:userService){}

}
