import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { User } from '../models/user';
import { DB } from './data.from.server';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  
  Users = new Array<User>()
  products=new Array<Product>()
  
 public get AllProduct():Array<Product>{
  return this.AllProduct
 }
  constructor() {

    DB.users.forEach(u => {
      let myUser = new User();
      myUser.id = u.id;
      myUser.username = u.name;
      myUser.password = u.password;

      

      myUser.signUpDate = new Date(u.signUpDate);
      u.loginDates.forEach(d => {
        myUser.loginDates.push(new Date(d))
      })

      this.Users.push(myUser)

    })


    DB.Product.forEach(u => {
      let product = new Product(
      u.name,
      u.price,
      u.picturSRC)
      this.products.push(product)
    })

  }
}
