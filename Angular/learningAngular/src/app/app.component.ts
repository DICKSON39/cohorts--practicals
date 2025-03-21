import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  listName: string[] = [];
  name="Pauline";
  num1 = 1234567
  date = new Date () 
  today = new Date ()
  Angular = 'Angular'
  age= 24

  addName(name: string) {
    this.listName.push(name);
    //console.log(name);
    //console.log(this.listName);
  }
  promise = new Promise ((resolve,reject) => {
    setTimeout(()=> {
      resolve('Hello Anngular feel Me')
    },5000)
  })

  percent = 0.6
}
