import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:3000/products-info";
  constructor() { }

  async getAllProducts() : Promise<Products[]> {
      const data = await fetch(this.url)
      return await data.json() ?? [];
  }

  async getProductsById(id: Number): Promise<Products | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return await data.json() ?? {}; //nullish coalescing operator - '??'
  }
}
