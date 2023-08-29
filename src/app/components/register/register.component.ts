import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  signUpError = false

  newUser = new User();

  constructor(
    //כדי להכיר את המשתמשים הקימים
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


  checkNewUser() {
    this.newUser.username
      = this.loginForm.controls['userName'].value;
      this.newUser.password
      = this.loginForm.controls['password'].value

    if (this.newUser.username == this.dataService.Users.find
      (u => u.username == this.newUser.username)?.username || this.newUser.username == undefined)
      {
        this.signUpError = true
      }

    else {
      this.loginService.currentUser = this.newUser;
      this.router.navigate(['my-account'])
    }
  }


}
