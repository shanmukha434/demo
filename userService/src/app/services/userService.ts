import { Injectable } from "@angular/core";
import { loggerService } from "./loggerService";

@Injectable() // used to inject  service into another but implemented in send service file
export class UserService{
    constructor(private loggService:loggerService){}
    users=[
        {name:'John',status:'active'},
        {name:'Mark',status:'Inactive'},
        {name:'Steve',status:'active'},
      ]
      addUser(name:string,status:string){
        this.users.push({name:name,status:status});
        this.loggService.logMessage(name,status);
        
      }
    
}