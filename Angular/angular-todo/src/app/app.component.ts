import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItem {
  id:number
  task:string
  completed:boolean
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,NgFor,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   TodoList: TodoItem [] = []
   newTask: string = ''
   showP= true

   addTask():void {
    
    if(this.newTask.trim() !== '') {
      const newTodoItem : TodoItem = {
        id : Date.now(),
        task: this.newTask,
        completed:false
      }
      
      this.TodoList.push(newTodoItem)
      //console.log(this.TodoList)
      this.newTask = ''
    }
   }

   toggleCompleted(index: number):void {
   // console.log(index)
    this.TodoList[index].completed = !this.TodoList[index].completed
    //console.log(this.TodoList)
   }

   deleteTask(id:number):void {
this.TodoList= this.TodoList.filter(item => item.id !== id)
//console.log(this.TodoList );

   } 


}
