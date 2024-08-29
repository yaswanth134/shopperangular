import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserReg} from './user-reg';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin','*')
  .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
  .set('content-type','application/json');

  private baseURL="http://localhost:8082/shopper1.13/user/register";
  constructor(private  httpclient:HttpClient) { }

  reguser(userreg:UserReg):Observable<String>{
    return this.httpclient.post<String>(`${this.baseURL}`,userreg,{'headers':this.headers});
  }
}
