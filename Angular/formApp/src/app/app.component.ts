import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormsComponent } from './forms/forms.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
