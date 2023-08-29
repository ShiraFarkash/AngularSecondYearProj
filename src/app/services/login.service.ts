import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({

  providedIn: 'root'
})
export class LoginService {
  NewUse=new User()
  currentUser=new User()
  
  constructor(private http:HttpClient) { }

  SignUpUser(){
    this.NewUse.id=this.currentUser?.id
    this.NewUse.loginDates=this.currentUser?.loginDates
    this.NewUse.password=this.currentUser?.password
    this.NewUse.signUpDate=this.currentUser?.signUpDate
    this.NewUse.username=this.currentUser?.username
return this.http.post<boolean>(environment.url,this.NewUse)


  }
  isLogin(){
    return this.currentUser!=undefined
  }
}
