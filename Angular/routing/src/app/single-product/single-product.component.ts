import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-product',
  imports: [RouterModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {
id=''
constructor (private  activeRoute:ActivatedRoute){}

ngOnInit(): void {
   // this.id = this.activeRoute.snapshot.params['id']

   this.activeRoute.params.subscribe((params) => {
    this.id = params['id']
   })
}


}
