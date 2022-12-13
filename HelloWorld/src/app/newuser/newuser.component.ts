import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  frmEmailAddress = new FormControl('', [Validators.required, Validators.email]);
  frmUserId = new FormControl('', [Validators.required]);
  frmFirstName = new FormControl('', [Validators.required]);
  frmLastName = new FormControl('', [Validators.required]);
  frmPassword = new FormControl('', [Validators.required]);

  //instatiate user object to be sent to server
  user: User = new User("",
  "",
  "",
  "",
  "");

  tooltipBtn="Click here to register";
  constructor(
    private httpClient: HttpClient,
    private api:WebcommService) {}

  ngOnInit(): void {
  }

  RegisterUser()
  {
    if(this.frmUserId.valid && this.frmEmailAddress.valid && this.frmFirstName.valid && this.frmLastName.valid && this.frmPassword.valid)
    {
      this.user.userId = this.frmUserId.value!;
      this.user.firstName = this.frmFirstName.value!;
      this.user.lastName = this.frmLastName.value!;
      this.user.emailAddress = this.frmEmailAddress.value!;
      this.user.password = this.frmPassword.value!;

      return this.httpClient.post<any>('http://localhost:3000/Users', this.user).subscribe(
        response => {
          alert("Account creation successful")
          window.location.href=('http://localhost:4200/login')
        } ,
        (err) => {
          console.log(err);
          alert(err.error.message);
        }
      ); 
    } 
    else 
    {
      return("You cheesed");
    }  
  }
}
