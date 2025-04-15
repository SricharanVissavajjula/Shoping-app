import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  cartCount = new Observable<any>()

 constructor( private store  : Store<{count : number}>){
    this.cartCount = this.store.select('count')
    console.log(this.cartCount)
   }
}
