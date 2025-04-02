import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './test/contact/contact.component';
import { ProductComponent } from './test/product/product.component';
import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [
    {path:'', component: TestComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'product', component: ProductComponent},
    {path: 'product/:id', component: SingleProductComponent}, // This route is not necessary as it is already covered by the previous one
];
