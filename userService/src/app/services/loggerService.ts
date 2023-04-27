import { Injectable } from "@angular/core";

@Injectable()
export class loggerService{
    constructor(){}
    logMessage(name:string,status:string){
        console.log('A new User with'+name+'with status'+status+'has been added')

    }
}