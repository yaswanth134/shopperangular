import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin','*')
  .set('content-type','application/json');

  private baseURL="http://localhost:8082/shopper1.13/user/login";
  constructor(private httpclient:HttpClient) { }

  loginUser(user: User):Observable<object>{
    return this.httpclient.post(`${this.baseURL}`,user,{'headers':this.headers});
  }
}
