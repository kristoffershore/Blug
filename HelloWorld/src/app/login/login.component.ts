import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

var token = 'a';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private httpClient: HttpClient,) {}
  
  frmUserId = new FormControl('', [Validators.required]);
  frmPassword = new FormControl('', [Validators.required]);
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Login(){  
    let loginUrl = 'http://localhost:3000/Users/Login/'+this.frmUserId.value+'/'+this.frmPassword.value;
    if(this.frmUserId.valid && this.frmPassword.valid)
    {
      console.log(loginUrl);
      return this.httpClient.get<any>(loginUrl).subscribe(      
        response => {
          console.log(response);
          token=response.token;
          alert("Login was successful!!!")
          alert("Here is your token: "+token)
          localStorage.setItem('token', token);
          window.location.href=('http://localhost:4200')
        },
        (err) => {
          console.log(err);
          alert(err.error.message);
        }         
      ); 
    } 
    else 
    {
      return("You cheesed.");
    }
  }
}
export { token }
