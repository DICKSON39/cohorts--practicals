import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('myName') element1!: ElementRef;


myName= "john doe"
showP = true
value= "Dummy Value"
list: string[]=[]

day= new Date ().getDay()
onSave(){
  //this.showP =! this.showP
  this.list.push("Alamin")
  this.list.push("John")
  this.list.push("Mark")
  this.list.push("Milicent")
  
  console.dir(this.element1.nativeElement)
}


}
