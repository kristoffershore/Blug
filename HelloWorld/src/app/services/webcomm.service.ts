import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebcommService {
  @Output() public onMessage: EventEmitter<any> = new EventEmitter<any>();
  constructor(private httpC:HttpClient) { }

  public SendAuthenticatedRequest()
  {
    let token = "xxx";
    return this.httpC.get("https://localhost:3000/Login/:userId/:password", {headers:{Authorization:"Bearer "+token}});
    //return this.httpC.post("https://localhost:3000/api/values", userInstance, {headers:{Authorization:"Bearer "+token}});

  }

  // Login(userId:string, pwd:string)
  // {
  //   return this.httpC.get<Token>(`${environment.serverEndpoint}/Login/:userId/:password`, {userName:userId, password:pwd});
  // }

  // CreateUser(userId:string,firstName:string,lastName:string,emailAddress:string,password:string)
  // {
  //   return this.httpC.post<Token>(`${environment.serverEndpoint}/Login/:userId/:password`, {userName:userId, password:pwd});
  // }

  // ViewPosts() 
  // {
  //   return this.httpC.get(`${environment.serverEndpoint}/Posts`);
  // }

  // getPosts()
  // {
  //   return this.httpC.get('http://localhost:3000/Posts'); 
  // }

  // getPosts2(): Observable<Post[]> {
  //   return this.httpC.get<Post[]>('http://localhost:3000/Posts')
  //     .pipe(
  //       tap(_ => this.log('fetched heroes')),
  //       catchError(this.handleError<Hero[]>('getHeroes', []))
  //     );
  // }
}

