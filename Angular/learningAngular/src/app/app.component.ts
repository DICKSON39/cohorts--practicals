import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './routing/routing.component';
import { ApisComponent } from './apis/apis.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule, Child1Component, Child2Component,RoutingComponent,ApisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  @ViewChild('form') myForm!:NgForm
  listName: string[] = [];
  name="Pauline";
  num1 = 1234567
  date = new Date () 
  today = new Date ()
  Angular = 'Angular'
  age= 24

  countryList:country[]  = [
    new country("1", "India"),
    new country ("2", "USA"),
    new country ("3", "England")
  ]

  onSubmit(form:any) {
    console.log(form.value)

  }

  upDateForm() {
  this.myForm.setValue ({
    firstname: "John",
    lastname: "Markdaniels",
    email: "john@gmail.com",
    gender: "male",
    isMarried: true,
    country:'2',
    address: {
      city: "nyeri",
      street: "Ruringu"
    }
  })

  // this.myForm.control.patchValue({
  //    firstname:"John",
  //    lastname: "Marktenone",
  //    email: "Johndoe@gmail.com",
  //    isMarried: true
  // })

  setTimeout(() => {
    this.myForm.reset()
  },3000)
  }

 

  
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


export class country {
  id:string;
  name:string

  constructor(id:string, name:string){
    this.id =id
    this.name = name
  }
}
