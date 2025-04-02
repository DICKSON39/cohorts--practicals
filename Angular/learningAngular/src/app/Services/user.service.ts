import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

   names:string[] = []
   
   getNames():string[]{
    return this.names
   }

   addNames(name:string) {
    this.names.push(name)
   }

   deleteName(id:number){
    this.names.splice(id,1)
    
   }

}
