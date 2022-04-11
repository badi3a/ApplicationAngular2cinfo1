import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  save(object:any){
    console.log(object)
    this.productService.list.push(object);

  }

}
