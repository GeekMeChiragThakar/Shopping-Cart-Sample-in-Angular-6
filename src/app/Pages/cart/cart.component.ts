import { Component, OnInit } from '@angular/core';
import { DataShareService  } from "../DataShareService";
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carritemdata= [];
  totalsum=0;
  constructor(private data:DataShareService,private router: Router) { }

  ngOnInit() {
    debugger;
    if (localStorage.getItem("Cartitem") !== null) {
      this.carritemdata= JSON.parse(localStorage.getItem("Cartitem"));
      this.data.updateTotalCount(JSON.parse(localStorage.getItem("Cartitem")).length)
      this.updatetotalsum()
    }else
    {
      this.data.updateTotalCount(0)
    }
  }

  Removeitem(item)
  {
    var index = this.carritemdata.indexOf(item);
    this.carritemdata.splice(index, 1);
    this.data.updateTotalCount(this.carritemdata.length)
    localStorage.setItem("Cartitem" ,JSON.stringify(this.carritemdata));
    this.updatetotalsum()
  }

  updatetotalsum()
  {
    this.totalsum=0;
    if(this.carritemdata.length==0){this.totalsum=0}else
    {
    this.carritemdata.forEach(element => {
      this.totalsum+=element.price;
    });
  }
  }
  Do()
  {
    this.router.navigate(["Home/ItemDetails"]);
  }
  

}
