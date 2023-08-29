import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart-in-home',
  templateUrl: './cart-in-home.component.html',
  styleUrls: ['./cart-in-home.component.css']
})
export class CartInHomeComponent implements OnInit {

  constructor() { }
  @Input()ClickOnPic2=false
  @Input() parameter:Product | undefined
  @Output() parmameter2= new EventEmitter<boolean>()
  ngOnInit(): void {
  }
  BackPage(){
    this.parmameter2.emit(false)
    this.ClickOnPic2=true;
    console.log(this.parmameter2)
  }

}
