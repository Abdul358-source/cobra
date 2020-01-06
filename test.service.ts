import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor( private httpclient : HttpClient) { }


  fetch(){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
