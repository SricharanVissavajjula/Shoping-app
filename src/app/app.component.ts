import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartsComponent } from './carts/carts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartItemsService } from './cart-items.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountService } from './count.service';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'shoping-cart';
  productCount : any;

  constructor(private counter : CountService){
    this.counter.cartCount.subscribe({
      next : (value :number) => {
        this.productCount = value
      }
    })
  }

  showCartItems(){
    this.title = 'charan'
    console.log(this.title)
  }
}
