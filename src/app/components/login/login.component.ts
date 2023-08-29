import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  signInError = false

  constructor(
    private dataService: DataService,
    private loginService: LoginService, 
    private router: Router
    ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    })
  }

  checkUser() {
    let newUser = new User();

    newUser.username
      = this.loginForm.controls['userName'].value;
    newUser.password
      = this.loginForm.controls['password'].value



    let myUser =
      this.dataService.Users.find
        (u =>
          u.username == newUser.username &&
          u.password == newUser.password)
          
    if (myUser == undefined) {
      this.signInError = true
    }
    else {
      this.loginService.currentUser = myUser;
      this.router.navigate(['my-account'])
    }
  }

goRegister(){

  this.router.navigate(['/register'])
}

}
