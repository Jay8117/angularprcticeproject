import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of,from, interval, take, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) {
     
     
   }

  // demo(){
  //   return this.http.get("https://jsonplaceholder.typicode.com/users");
  // }
  
}
