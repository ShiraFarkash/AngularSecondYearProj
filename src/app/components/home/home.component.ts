import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myUserName = 'אורח'
  
  currentUser: User | undefined = undefined
  constructor(private router: Router,
    private loginService: LoginService,
    private dataService: DataService
  ) {

  }

  ngOnInit(): void {
    if (this.loginService.isLogin()) {
      this.currentUser = this.loginService.currentUser
      this.myUserName = this.currentUser?.username || 'אורח'
    }
  }


  goSignUp() {
    this.router.navigate(['/register'])
  }

  goSignIn() {
    this.router.navigate(['/login'])

  }

  

}
