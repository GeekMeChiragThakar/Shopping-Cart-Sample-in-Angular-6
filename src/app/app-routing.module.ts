import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{  LoginComponent} from './Pages/login/login.component'
import{  ItemDetailsComponent} from './Pages/item-details/item-details.component'
import{  HomeComponent} from './Pages/home/home.component'
import{  CartComponent} from './Pages/cart/cart.component'


const routes: Routes = [ 
  {path: 'Home',
  component: HomeComponent,
  children: [
    { path: 'ItemDetails', component: ItemDetailsComponent },
    { path: 'Cart', component: CartComponent,  }
    
  ]},
 { path: '**', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
