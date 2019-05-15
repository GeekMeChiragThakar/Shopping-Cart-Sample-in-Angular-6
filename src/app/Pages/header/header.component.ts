import { Component, OnInit } from '@angular/core';
import { DataShareService  } from "../DataShareService";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalcount:number;
 approvalText:string="";
 
  constructor(private data:DataShareService,private router: Router) { }

  ngOnInit() {
    this.data.currentcount.subscribe(msg => this.totalcount = msg);
  }
  
  Cartdetails()
  {
    this.router.navigate(["Home/Cart"]);
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(["/"]);
  }
}
