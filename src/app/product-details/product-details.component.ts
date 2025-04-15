import { Component, Input, Output, } from '@angular/core';
import { Products } from '../products';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CartItemsService } from '../cart-items.service';
import { createAction, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement } from './product-details.actions';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent {
  @Input() products!: Products
  productList : Array<any> = []
  count$ :Observable<any>
  incrementCount : number = 0;

  constructor( private store  : Store<{count : number}>){
    this.count$ = this.store.select('count')
    console.log(this.count$)
   }

   increment(){
    this.store.dispatch(increment())
   }

   decrement(){
    this.store.dispatch(decrement())
   }

   incrementBtn(){
    this.incrementCount++
   }
   
   decrementBtn(){
    this.incrementCount--
   }
  
}

