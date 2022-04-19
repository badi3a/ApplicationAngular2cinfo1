import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.url;
  constructor(private http: HttpClient) { }
  getAllProducts(){
   return this.http.get<Product[]>(this.url);
  }
  addProduct(product: Product){
    return this.http.post(this.url, product)
  }
  deleteProduct(id: number){
    return this.http.delete(this.url+id);
  }
  updateProduct(id: number, p: Product){
    return this.http.put(this.url+id,p);
  }
}
