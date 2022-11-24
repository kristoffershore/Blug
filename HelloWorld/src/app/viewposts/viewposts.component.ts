import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebcommService } from '../services/webcomm.service';

export class Post
{
    postId:number= 0; 
    createdDate:Date= new Date(); 
    title:string=''; 
    content:string='';
    userId:string='';
    headerImage:string='';
    lastUpdated:Date= new Date();
    
    constructor(postId:number,createdDate:Date,title:string,content:string,userId:string,headerImage:string,lastUpdated:Date)
    {
        this.postId=postId;
        this.createdDate=createdDate;
        this.title=title;
        this.content=content;
        this.userId=userId;
        this.headerImage=headerImage;
        this.lastUpdated=lastUpdated;   
    }
} 

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})

export class ViewpostsComponent implements OnInit {
  
  posts: Post[] = [];
  postData = {};
  constructor(
    private httpClient: HttpClient,
    private api:WebcommService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts()
  {
    return this.httpClient.get<any>('http://localhost:3000/Posts').subscribe(
      response => {
        console.log(response);
        this.posts = response;
        console.log(this.posts)
      } 
    ); 
  }
}

