import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable } from 'rxjs';
import { Postuser } from './postuser';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url = "https://jsonplaceholder.typicode.com/posts";
  
  constructor(private http: HttpClient) { }

  addPost(post : Postuser) : Observable<any> {
    console.log("inside add post")
    return this.http.post(this._url,JSON.stringify(Postuser));
  }
}
