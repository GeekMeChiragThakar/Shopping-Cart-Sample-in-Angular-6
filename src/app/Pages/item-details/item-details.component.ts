import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService  } from "../DataShareService";
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  
})
export class ItemDetailsComponent implements OnInit {
  totalcount=0;
  //message:number;
  cartproduct={};
  previousproudctdata= [];
  ProductList = [{ id:1,Productname: 'IPhone 1', price: 2364 ,Categorname:"Mobile 1989"},
  { id:2,Productname: 'IPhone 2', price: 5264 ,Categorname:"Mobile 1990"},
  { id:3,Productname: 'IPhone 3', price: 5004 ,Categorname:"Mobile 1992"},
  { id:4,Productname: 'IPhone 4', price: 2019 ,Categorname:"Mobile 1955"},
  {id:5, Productname: 'IPhone 5', price: 3025 ,Categorname:"Mobile 2011"},
  {id:6, Productname: 'IPhone 6', price: 2017 ,Categorname:"Mobile"}];

  

  constructor(private router: Router,private data:DataShareService) { }

  ngOnInit() {
   // this.data.currentApprovalStageMessage.subscribe(msg => this.message = msg);
    //check login 
    let check = JSON.parse(localStorage.getItem("user"));
    if(!check.islogin || check==null)
    {
      this.router.navigate(["/"]);
    }
    //
    if (localStorage.getItem("Cartitem") !== null) {
      this.data.updateTotalCount(JSON.parse(localStorage.getItem("Cartitem")).length)
    }else
    {
      this.data.updateTotalCount(0)
    }
  }
  
  
  additem(itemdetails)
  {
    var alreayexits=false;
    if (localStorage.getItem("Cartitem") !== null) {
      this.previousproudctdata= JSON.parse(localStorage.getItem("Cartitem"));
    }
   
   if(this.previousproudctdata !=null && this.previousproudctdata.length>0)
   {
    this.previousproudctdata.forEach(element => {

      if(element.id==itemdetails.id) {
        
        alert("item already exits");
        alreayexits=true;
      }
      
      
    });
   }
      if(!alreayexits)
      {
        this.previousproudctdata.push(itemdetails);
        
      localStorage.setItem("Cartitem" ,JSON.stringify(this.previousproudctdata));
      this.data.updateTotalCount(this.previousproudctdata.length)
      alert("Item added successfully");
      }
        
   
    
      // 

  }

}


