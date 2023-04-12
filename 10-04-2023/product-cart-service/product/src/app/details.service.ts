import { Injectable } from '@angular/core';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {


  productDetails!:items[];
  getDetails():items[]{
    
    this.productDetails=[
      
    {id:"101",itemName:"red t-shirt",type:"Men's Wear",price:150,qty:5},
    {id:"102",itemName:"Craft Bag",type:"Bags",price:2020,qty:3},
    {id:"103",itemName:"Jeans pants",type:"Men's Wear",price:1400,qty:4},
    {id:"104",itemName:"school bags",type:"Bags",price:250,qty:4},

  ]

  return this.productDetails
}

  constructor() { }
}
