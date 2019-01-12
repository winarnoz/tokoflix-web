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

  getOwnedMovies() {
    let ids:any=[];
    ids = JSON.parse(localStorage.getItem("ownedMovieIds"));
    return ids;
  }

  isMovieOwned(movieId:any) {
    let owned:any = [];
    owned = this.getOwnedMovies();
    if(owned == null) {
      return "NOT OWNED";
    } else {
      if(owned.indexOf(movieId)==-1) {
        return "NOT OWNED";
      } else {
        return "OWNED";
      }
    }
  }

  saveOwnedMovies(movieId:number) {
    let arr: any = [];
    arr = this.getOwnedMovies();
    arr.push(movieId);
    localStorage.setItem("ownedMovieIds",JSON.stringify(arr));
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

}
