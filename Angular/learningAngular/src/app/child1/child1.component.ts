import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
 @Output() emitNameEvent:EventEmitter<string> = new EventEmitter<string>();
  name= ""
 onAddName(){
this.emitNameEvent.emit(this.name)
 }
}
