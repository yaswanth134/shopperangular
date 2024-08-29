import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cartsetig} from './cartsetig';

@Injectable({
  providedIn: 'root'
})
export class CartsetService {

  headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin','*')
  .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
  .set('content-type','application/json');

  private baseURL="http://localhost:8082/shopper1.13/cart/setcart";
  constructor(private  httpclient:HttpClient) { }

  settingcart(cartsetingobj:Cartsetig):Observable<String>{
    return this.httpclient.post<String>(`${this.baseURL}`,cartsetingobj,{'headers':this.headers});
  }
}
