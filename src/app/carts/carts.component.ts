import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-carts',
  //imports: [ProductDetailsComponent],
  standalone: false,
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  @Input() products!: Products
  
}
