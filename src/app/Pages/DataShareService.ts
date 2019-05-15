import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
 providedIn: 'root'
})
export class DataShareService {
 
 private datacountupdateservice = new BehaviorSubject(0);
 currentcount = this.datacountupdateservice.asObservable();
 
 constructor() {
 
 }
 updateTotalCount(totalcount: number) {
 this.datacountupdateservice.next(totalcount)
 }
}