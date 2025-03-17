import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  myName= 'John Doe'
  myAge = 24
  isDisabled = false
  value= "This is Angular"

  onSave(){
    this.isDisabled = true
  }
  
}
