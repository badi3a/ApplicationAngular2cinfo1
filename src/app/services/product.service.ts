import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list: Product[] =  [
    { id: 12,
      title: 'T-shirt 1',
      price: 120,
      quantity: 0,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F56%2F49560dfa45732ed844e8e4742afdca248ee60f9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      like: 12,
      description: 'test description'},
    { id: 123,
      title: 'T-shirt 2',
      price: 10,
      quantity: 10,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F56%2F49560dfa45732ed844e8e4742afdca248ee60f9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      like: 12,
      description: 'test description'},
    { id: 34,
      title: 'T-shirt 3',
      price: 10,
      quantity: 10,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F56%2F49560dfa45732ed844e8e4742afdca248ee60f9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      like: 12,
      description: 'test description'}
  ]
  constructor() { }
}
