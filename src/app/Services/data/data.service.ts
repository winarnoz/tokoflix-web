import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from "rxjs";
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  initialBalance:number = 100000;

  constructor(

  ) { }

  getUserBalance() {
    let balance = localStorage.getItem("balance");
    if(this.isEmpty(balance)) {    
      this.setBalanceForNewUser();
      return this.initialBalance;
    } else {
      return balance;
    }
  }

  setBalanceForNewUser() {
    localStorage.setItem("balance",JSON.stringify(this.initialBalance));
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
}
