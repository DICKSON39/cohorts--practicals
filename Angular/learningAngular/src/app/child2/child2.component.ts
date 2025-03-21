import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  @Input() names:string[]=[]
}
