import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WebcommService } from '../services/webcomm.service';

export class User
{
    userId:string='';
    firstName:string='';
    lastName:string='';
    emailAddress:string='';
    password:string='';

    constructor(userId:string,firstName:string,lastName:string,emailAddress:string,password:string)
    {
        this.userId=userId;
        this.firstName=firstName;
        this.lastName = lastName;
        this.emailAddress=emailAddress;
        this.password=password;    
    }
}

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  //frmName = new FormControl('', [Validators.required]);
  user: User = new User('a','','','','');
  test = '';
  tooltipBtn="Click here to register";
  constructor() {}

  ngOnInit(): void {
  }

  RegisterUser()
  {
    this.test 
    alert(this.user.userId);
    alert(this.test);
  }
}
