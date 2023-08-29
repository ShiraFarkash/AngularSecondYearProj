import { Component, OnInit } from '@angular/core';
// import { Mark } from 'src/app/models/mark';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myUser: User | undefined = new User();
  // allMarks = new Array<Mark>();
  constructor(private loginSrvice: LoginService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.myUser = this.loginSrvice.currentUser;
console.log(this.myUser);

//     this.allMarks = this.dataService.marks.filter(
//       m => m.student?.id == this.myUser?.id
//     )
// console.log(this.dataService.marks);




  }



}
