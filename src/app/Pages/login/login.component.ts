import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  validation=true;
  Userdetails = { username: 'suraj', password: '123' ,islogin:false};
  constructor( private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

     
    localStorage.setItem('user', JSON.stringify(this.Userdetails));
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
debugger;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    debugger;
    let item = JSON.parse(localStorage.getItem("user"));
     if(this.f.username.value==item.username && this.f.password.value==item.password)
     {
       this.Userdetails.islogin=true;
       localStorage.setItem('user', JSON.stringify(this.Userdetails));
      this.router.navigate(["Home/ItemDetails"]);
     }
     else
     {
      this.validation=false;
     }
    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
}

}
