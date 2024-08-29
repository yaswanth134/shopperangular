import { Component ,NgModule, OnInit, enableProdMode } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';
import {UserReg} from '../user-reg';
import {RegisterUserService} from '../register-user.service';
import {Cartservice} from '../cartservice';
import {SharingdataService} from '../sharingdata.service';
import {Topsellerproductres} from '../topsellerproductres';
import { TopmonthsellerComponent } from '../topmonthseller/topmonthseller.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  
  public topmonthproducts:Topsellerproductres[]=[];
  user:User=new User();
  userreq:UserReg=new UserReg();
  email:string='';
  response:number=0;
  totalamount:number=0;
  message:string='';

  Gender:string[];
  constructor(private userLogin:LoginuserService,private userregister:RegisterUserService,private sharedemail:SharingdataService){
    this.Gender=["male","female","others"];
  }
  
  ngOnInit(): void {
    
  }

  viewingcart(emailid:string,topmonthproducts:Topsellerproductres[],totalamount:number){
    fetch('http://localhost:8082/shopper1.13/cart/getcart/'+emailid)
    .then(res=>res.json())
    .then(products=>{
      products.map(function(res:any){
        fetch(`http://localhost:8082/shopper1.13/set/getproductdetails/${res.productid}`)
        .then(res2=>res2.json())
        .then(product2=>{
          topmonthproducts.push(product2);
          console.log(topmonthproducts);
        })
      }) 
    })
  }


  totalcalucal(){
    this.totalamount=0;
    this.topmonthproducts=[];
    this.email=this.sharedemail.getemailid();
    this.viewingcart(this.email,this.topmonthproducts,this.totalamount);
  }
   
  sendjson(){
    this.userLogin.loginUser(this.user).subscribe(data=>{alert(data)},error=>{
      if(error.status===200){
        alert("login successfully");
        this.response=error.status;
        //this.email=this.user.userName;
        this.sharedemail.sendemail(this.user.userName);
      }
      else if(error.status===500){
        alert("User name or Password not correct");
      }
      else{
        alert("server not responding");
      }
    })
  }
  senduserreg(){
    this.userregister.reguser(this.userreq).subscribe(data=>{
      console.log(data);
    },error=>{
      if(error.status===200){
        alert("Registered successfully");
      }
      else if(error.status===500){
        alert("User already existed");
      }
      else{
        alert("server not responding");
      }
    })
  }
  
}
