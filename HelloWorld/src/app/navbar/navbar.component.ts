import { Component, OnInit } from '@angular/core';
import { WebcommService } from '../services/webcomm.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private webcommsvc:WebcommService) { }

  ngOnInit():void {
    
  }
}
