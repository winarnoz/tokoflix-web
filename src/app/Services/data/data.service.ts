import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from "rxjs";
import { map, filter, switchMap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  initialBalance:number = 100000;

  constructor(
    private apiService: ApiService
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

  buyMovies(movieId:any,amount:any) { //it's bad practice to set amount from client, but nvm since it's dummy
    let balance:any = this.getUserBalance();
    if(balance < amount) {
      return false;
    } else {
      //console.log(this.apiService.getMoviePrice(this.mov));
      console.log(amount);
      let remainingBalance = balance - amount;
      console.log(remainingBalance);
      localStorage.setItem("balance",JSON.stringify(remainingBalance));
      this.saveOwnedMovies(movieId);
      return true;
    }
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
    this.isEmpty(arr) ? arr=[movieId] : arr.push(movieId);
    localStorage.setItem("ownedMovieIds",JSON.stringify(arr));
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  normalizeRating(rating:any) {
    if(rating==0) {
      rating = "N/A";
    }
    return rating;
  }

}
