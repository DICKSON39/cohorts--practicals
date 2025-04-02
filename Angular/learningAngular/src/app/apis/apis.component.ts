import { CommonModule } from '@angular/common';
import { Component, OnInit, resource, signal } from '@angular/core';

@Component({
  selector: 'app-apis',
  imports: [CommonModule],
  templateUrl: './apis.component.html',
  styleUrl: './apis.component.css'
})
export class ApisComponent implements OnInit {

  ngOnInit(): void {
    
  }
  color:string ='blue'
 todos: {id:number,name:string}[]=[
  {id:1,name:"Paul"},
  {id:2,name:"John"},
  {id:3,name:"Mark"},
  {id:4,name:"Daniels"},
  {id:5,name:"Doe"},
  {id:6,name:"Jane"},
 ]

 trackItem(index:number, todo:{id:number,name:string}):number {
  return todo.id;
}

  
}
