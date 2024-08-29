import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingdataService {
  emailid:string='';
  constructor() { }
  sendemail(data:string){
    this.emailid=data;
  }
  getemailid(){
    return this.emailid;
  }
}
