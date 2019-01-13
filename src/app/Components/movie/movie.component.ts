import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  
  movieId:any;
  movieData:any;

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.activeRoute.params.subscribe(params=>{
      this.movieId = this.getIdFromParam(params.movieInfo);
      this.getMovieDetail();

    });
  }

  getMovieDetail() {
    window.scrollTo(0,0);
    this.apiService.getMovieDetail(this.movieId).subscribe(
      res=>{
        this.movieData = res;
        console.log(res);
      },
      err=> {
        console.log(err);
      }
    );
  }

  buyMovie(movieId:any) {
    if(this.dataService.buyMovies(movieId, this.apiService.getMoviePrice(this.movieData.vote_average))) {
      console.log("buy success");
    } else {
      console.log("buy failed, insufficient balance");
    }
  }

  getIdFromParam(fullParam:any) {
    let texts: any;
    texts = fullParam.split("-");
    return texts[0];
  }

}
