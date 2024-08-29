import { Component } from '@angular/core';
import {Topsellerproductres} from '../topsellerproductres';
import {Cartsetig} from '../cartsetig';
import {CartsetService} from '../cartset.service';
import { error } from 'jquery';
import {SharingdataService} from '../sharingdata.service';

@Component({
  selector: 'app-topmonthseller',
  templateUrl: './topmonthseller.component.html',
  styleUrls: ['./topmonthseller.component.css']
})
export class TopmonthsellerComponent {

  public topmonthproducts:Topsellerproductres[]=[];
  cartobj:Cartsetig=new Cartsetig();
  public showme:boolean=false;
  public myvalue:boolean=false;
  public email:string='';

  constructor(private cartsetobj:CartsetService,private sharedemail:SharingdataService){
  }
  
  id:number=0;
  title:string="";
  descripton:string="";
  price:number=0;
  primaryimage:string="";
  secondaryimage:string="";
  offerprice:number=0;
  productname:string="";
  color:string="";
  stars:number=0;
  statusofproduct:string="";
  instock:string="";
  imageneedtodisplay:string="";
  mysizevalue:number=6;

  ngOnInit(){
    fetch("http://localhost:8082/shopper1.13/set/getallproducts")
    .then(res=>res.json())
    .then(products=>{
      this.topmonthproducts=products;
    })
  }
  
  view(clickedid:number){
    fetch("http://localhost:8082/shopper1.13/set/getproductdetails/"+clickedid)
    .then(res=>res.json())
    .then(products=>{
      this.id=products.id;
      this.title=products.title;
      this.descripton=products.descripton;
      this.color=products.color;
      this.instock=products.instock;
      this.offerprice=products.offerprice;
      this.price=products.price;
      this.stars=products.stars;
      this.primaryimage=products.primaryimage;
      this.secondaryimage=products.secondaryimage;
      this.statusofproduct=products.statusofproduct;
      this.productname=products.productname;
      this.imageneedtodisplay=products.primaryimage;
    })
  }

  imageviewonmain(s:string){
    this.imageneedtodisplay=s;
  }

  setcart(n:number){
    this.cartobj.email=this.sharedemail.getemailid();
    this.cartobj.productid=n;
    this.cartobj.size=this.mysizevalue;
    this.cartsetobj.settingcart(this.cartobj).subscribe(data=>{alert("addding to cart")},error=>{
      if(error.status===200){
        alert("added to cart");
      }else{
        alert("please login and try agian");
      }
    })
  }
}
