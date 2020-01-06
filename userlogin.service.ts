import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Loginviewmodel} from './loginviewmodel';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private httpClient : HttpClient) { }

  currentUserName:any = null;

  public Login(loginviewmodels : Loginviewmodel):Observable<any>{
    return this.httpClient.post<any>("https://jsonplaceholder.typicode.com/posts", loginviewmodels, {responseType : "json"})

    .pipe(map(user =>{
      if(user){
        this.currentUserName = user.UserName;
        sessionStorage.currentUserName = JSON.stringify(user)
      }
      return user;
    }));
  }

  public logOut(){
    sessionStorage.removeItem("currentUserName");
    this.currentUserName = null;
  }

}
