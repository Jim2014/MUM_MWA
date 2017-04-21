import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MyHttpService {

  constructor(private http:Http) { }
  getPosts(){
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1");
  }  
    
}
