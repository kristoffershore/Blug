import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { token } from '../login/login.component';
import { LoginComponent } from '../login/login.component';
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
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit{
  constructor(private httpClient: HttpClient,) {}

  frmPostId = new FormControl('', [Validators.required]);
  frmCreatedDate = new FormControl('', [Validators.required]);
  frmTitle = new FormControl('', [Validators.required]);
  frmContent = new FormControl('', [Validators.required]);
  frmUserId = new FormControl('', [Validators.required]);
  frmHeaderImage = new FormControl('', [Validators.required]);
  frmLastUpdate = new FormControl('', [Validators.required]);

  post: Post = new Post (0, new Date(), "", "", "", "", new Date());
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  CreatePost(){
    //let header = 'Bearer '+ token;
    let headers = new HttpHeaders;
    let token = localStorage.getItem('token');
    //alert(token);
      
    if(this.frmTitle.valid && this.frmContent.valid && this.frmHeaderImage.valid)
    {
      this.post.title = this.frmTitle.value!;
      this.post.content = this.frmContent.value!;
      this.post.userId = this.frmUserId.value!;
      this.post.headerImage = this.frmHeaderImage.value!;
      //console.log(loginUrl);
      return this.httpClient.post<any>('http://localhost:3000/Posts', this.post, { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})}).subscribe(      
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
