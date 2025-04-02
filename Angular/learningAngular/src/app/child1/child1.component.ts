import { AfterContentInit, AfterViewInit, Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements AfterViewInit, AfterContentInit {
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
 //@Output() emitNameEvent:EventEmitter<string> = new EventEmitter<string>();
  name= ""
  private user = inject(UserService)
 onAddName(){
//this.emitNameEvent.emit(this.name)
 this.user.addNames(this.name)
 }
}
