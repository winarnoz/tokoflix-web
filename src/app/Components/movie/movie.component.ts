import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  
  movieId:any;
  movieData:any;
  message:any;
  type:any;

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
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
    this.spinner.show();
    this.apiService.getMovieDetail(this.movieId).subscribe(
      res=>{
        this.movieData = res;
        console.log(res);
        this.spinner.hide();
      },
      err=> {
        this.spinner.hide();
      }
    );
  }

  buyMovie(movieId:any) {
    this.message=null;
    if(this.dataService.buyMovies(movieId, this.apiService.getMoviePrice(this.movieData.vote_average))) {
      this.showAlert("Purchase success","success");
    } else {
      this.showAlert("Purchase failed, insufficient balance","error");
    }
  }

  getIdFromParam(fullParam:any) {
    let texts: any;
    texts = fullParam.split("-");
    return texts[0];
  }

  showAlert(message:any,type:any) {
    this.message=message;
    this.type=type;
  }

}
