import { Component,ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:string;
totalcount=0;
  constructor(private router: Router) { }
  
  ngOnInit() {
    
    let check = JSON.parse(localStorage.getItem("user"));
    if(!check.islogin || check==null)
    {
      this.router.navigate(["/"]);
    }
    //alert(this.totalcount);
    
  }

  logout()
  {
    let userdetails = JSON.parse(localStorage.getItem("user"));
    userdetails.islogin=false;
    localStorage.setItem('user', JSON.stringify(userdetails));
    this.router.navigate(["/"]);
  }
}
