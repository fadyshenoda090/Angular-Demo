import { Component } from '@angular/core';
import { StoreInterface } from 'src/app/modeles/Iproducts';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  // selectFilter:number=0;
  priceFilter: number = 0;
  inputValue: number = 0;
  cart: { product: StoreInterface; quantity: number }[] = [];
  counter: number = 0;
  totalPrice: number = 0;
  constructor(){

  }
  addToCart(newPrd: StoreInterface) {
    const existingProduct = this.cart.find((prd) => prd.product.id === newPrd.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ product: newPrd, quantity: 1 }); 
    }

    this.totalPrice += newPrd.price;
  }
  
}
