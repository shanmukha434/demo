export class userService{
    constructor(){}
//  this is for creating data service
users=[
    {name:'John',status:'active'},
    {name:'Mark',status:'Inactive'},
    {name:'Steve',status:'active'},
  ]
  addUser(name:string,status:string){
    this.users.push({name:name,status:status})
  }
}