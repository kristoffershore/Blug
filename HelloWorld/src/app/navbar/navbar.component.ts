import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebcommService } from '../services/webcomm.service';
 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token = localStorage.getItem('token');
  constructor(private webcommsvc:WebcommService) { }

  ngOnInit():void {    
    let headers = new HttpHeaders;  
  }

  Logout(){
    localStorage.removeItem('token');
    alert('You have logged out successfully.');
    //alert("Token: "+localStorage.getItem('token'));
    window.location.href=('http://localhost:4200/login')
  }
}
