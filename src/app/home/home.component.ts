import { Component, inject } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { Products } from '../products';
import { ProductService } from '../product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productList: Products[] = [];
  productService : ProductService = inject(ProductService);
  totalProducts : number = 0;

  itemsToCart(value :  number){
    this.totalProducts = value;
  }

  constructor(){
    this.productService.getAllProducts().then((productList : Products[])=> {
      this.productList = productList;
    })
  }
}
