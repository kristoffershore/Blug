import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { token } from '../login/login.component';
import { WebcommService } from '../services/webcomm.service';
import jwt_decode from "jwt-decode";

var selectedPostId = 0;

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

let token = '';
let tokenCheck  = localStorage.getItem('token')

if(tokenCheck != null){
  token = tokenCheck;
  var decodedToken = jwt_decode<any>(token);
  var currentUser = decodedToken.userId;
}
else {
  token = '';
}

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})

export class ViewpostsComponent implements OnInit {
  
  currentUser = currentUser;
  
  posts: Post[] = [];
  selectedPost: Post = new Post (0, new Date(), "", "", "", "", new Date());
  postData = {};
  static posts: any;
  constructor(
    private httpClient: HttpClient,
    private api:WebcommService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts()
  {
    return this.httpClient.get<any>('http://localhost:3000/Posts/').subscribe(
      response => {
        console.log(response);
        this.posts = response;
        this.posts.reverse();
        console.log(this.posts);
      } 
    ); 
  }

  public getPostById(currentPostId: any){
    {
      return this.httpClient.get<any>('http://localhost:3000/Posts/'+currentPostId).subscribe(
        response => {
          console.log(response);
          this.selectedPost = response;
          alert(this.selectedPost.postId);
          selectedPostId = this.selectedPost.postId;
          alert(selectedPostId);
        } 
      ); 
    }
  }

  deletePost(currentPostId: any)
  {
    if(window.confirm('Are sure you want to delete this item ?')){
      let headers = new HttpHeaders;
      let token = localStorage.getItem('token');
      alert(token);
      
      return this.httpClient.delete<any>('http://localhost:3000/Posts/'+currentPostId, { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})}).subscribe(
        response => {
          console.log(response);
          this.posts = response;
          console.log(this.posts);
          alert("Item successfully deleted.")
          window.location.href=('http://localhost:4200/')
        } 
      ); 
    }
    else {
      return;
    }    
  }
}

export { selectedPostId }

