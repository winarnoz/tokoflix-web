import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey:string = 'db8d07787ba86e43c98bab42e4cc83c5';

  constructor(
    private http:HttpClient
  ) { }
  //now_playing?api_key=db8d07787ba86e43c98bab42e4cc83c5&language=id&page=1&region=ID
  getNowPlayingMovies(region:any="ID",language:any="id",page:number=1):Observable<any> {
    return this.http.get(environment.apiUrl+"/"+environment.apiVersion+"/movie/now_playing?api_key="+this.apiKey+"&language="+language+"&page="+page);
  }

  getMovieDetail(movieId:number,language:any="id"):Observable<any> {
    return this.http.get(environment.apiUrl+"/"+environment.apiVersion+"/movie/"+movieId+"?api_key="+this.apiKey+"&language="+language);
  }

  getSimilarMovies(movieId:number,language:any="id",page:number=1):Observable<any> {
    return this.http.get(environment.apiUrl+"/"+environment.apiVersion+"/movie/"+movieId+"/similar?api_key="+this.apiKey+"&language="+language+"&page="+page);
  }

  getRecommendedMovies(movieId:number,language:any="id",page:number=1):Observable<any> {
    return this.http.get(environment.apiUrl+"/"+environment.apiVersion+"/movie/"+movieId+"/recommendations?api_key="+this.apiKey+"&language="+language+"&page="+page);
  }

}
