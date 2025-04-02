import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private router: Router) {}
  onClick() {
    console.log('Button clicked!');
    alert('Button clicked!');

  }

  

  navigateToDashboard() {
    this.router.navigate(['/contact']);
  }
}
