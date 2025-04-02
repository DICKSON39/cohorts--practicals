import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-child2',
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnInit{

 



  //@Input() names:string[]=[]

  names:string[] =[]
  
  

  //to use aservice

  constructor(private users:UserService){}
  ngOnInit(): void {
   this.names = this.users.getNames()   
  }

  onDelete(i:number){
    this.names.splice(i,1)
  }

  
}
