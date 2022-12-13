import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { token } from '../login/login.component';
import { LoginComponent } from '../login/login.component';
import { ViewpostsComponent } from '../viewposts/viewposts.component';
import { selectedPostId } from '../viewposts/viewposts.component';
//import { token } from 'C:/Users/krist/blog-front-end-kristoffershore/HelloWorld/src/app/login/login.component.js';

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
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit{
  constructor(private httpClient: HttpClient,) {}

  frmPostId = new FormControl('', [Validators.required]);
  frmCreatedDate = new FormControl('', [Validators.required]);
  frmTitle = new FormControl('', [Validators.required]);
  frmContent = new FormControl('', [Validators.required]);
  frmUserId = new FormControl('', [Validators.required]);
  frmHeaderImage = new FormControl('', [Validators.required]);
  frmLastUpdate = new FormControl('', [Validators.required]);

  allPosts = ViewpostsComponent.posts;
  // selectedPost: Post = this.allPosts[0];
  post: Post= new Post (0, new Date(), "", "", "", "", new Date());
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  EditPost(){
    alert(this.allPosts);
    let editPostUrl = 'http://localhost:3000/Posts/'+this.frmPostId.value;
    let headers = new HttpHeaders;
    let token = localStorage.getItem('token');
    alert(token);
    if(this.frmTitle.valid && this.frmContent.valid && this.frmHeaderImage.valid)
    {
      this.post.title = this.frmTitle.value!;
      this.post.content = this.frmContent.value!;
      this.post.userId = this.frmUserId.value!;
      this.post.headerImage = this.frmHeaderImage.value!;

      return this.httpClient.patch<any>(editPostUrl+selectedPostId, this.post, { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})}).subscribe(      
        response => {
          console.log(response);
          //token=response.token;
          alert("Post successful!!!")
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

