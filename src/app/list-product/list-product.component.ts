import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public titleApp: string;
  public  name: string;
  constructor() {
  }
  ngOnInit(): void {
    this.titleApp= 'First Angular App';
  }


}
