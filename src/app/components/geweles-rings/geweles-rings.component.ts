import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-geweles-rings',
  templateUrl: './geweles-rings.component.html',
  styleUrls: ['./geweles-rings.component.css']
})
export class GewelesRingsComponent implements OnInit {
  ClickOnPic=false
  allPic = new Array<Product>();
  picSendToChid :Product | undefined;
  constructor(private router: Router,
     private dataService: DataService) { }

  ngOnInit(): void {
    this.allPic = this.dataService.products

 
  }

  pushToChild(a:Product){
    this.picSendToChid=a;
    console.log(this.allPic)
    this.ClickOnPic=true
  }

}
