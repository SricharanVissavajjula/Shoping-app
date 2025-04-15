import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  private cartProducts = new Subject<any>()

    setData(data:any){
      this.cartProducts.next(data)
    }

    getData() {
      return this.cartProducts.asObservable();
    }
  }
