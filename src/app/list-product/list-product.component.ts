import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {CalculService} from "../services/calcul.service";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  public titleApp: string;
  public listProduct:Product[];
  priceMax: number;
  alertStock: number;
  constructor(private calculService:CalculService,
              private productService: ProductService) {

  }
  ngOnInit(): void {
    this.titleApp= 'First Angular App';
    this.productService.getAllProducts().subscribe(
      (data:Product[])=>this.listProduct=data)
  }
  incrementLike(p:Product): void{
    let i= this.listProduct.indexOf(p);
    if(i!=-1){
      this.listProduct[i].like++;
    }
  }
  buyProduct(p:Product): void {
      let i = this.listProduct.indexOf(p);
      if (i != -1) {
        this.listProduct[i].quantity--;
      }
    }
  getStatProduct(){
    this.alertStock= this.calculService.
    getStat(this.listProduct, 'quantity',0)
  }
}
