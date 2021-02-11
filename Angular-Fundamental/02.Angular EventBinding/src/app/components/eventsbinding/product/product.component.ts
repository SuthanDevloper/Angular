import { Component, OnInit } from '@angular/core';
import {Iproduct} from '../../../models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Iproduct = {
    id: '100',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWZyW_7EQrb2Os9RFkNrV9uHHjQ-Z8VlPGw&usqp=CAU',
    name: 'Iphone',
    price: 100,
    qty: 5
  };

  public decrQty(){
    this.product.qty=(this.product.qty-1 >0 ?this.product.qty-1:1);
  }

  public incrQty(){
    this.product.qty=this.product.qty+1;
  }
  constructor() {
  }
  ngOnInit(): void {
  }

}
