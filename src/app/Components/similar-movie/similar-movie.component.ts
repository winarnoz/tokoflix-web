import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';
import { environment } from '../../../environments/environment';
import { Router,ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-similar-movie',
  templateUrl: './similar-movie.component.html',
  styleUrls: ['./similar-movie.component.scss']
})
export class SimilarMovieComponent implements OnInit {

  @Input() movieId:any;
  movies:any=[];

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private route: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getSimilarMovie(this.movieId);
  }

  getSimilarMovie(movieId:any) {
    this.apiService.getSimilarMovies(movieId).subscribe(
      res=>{
        this.movies = res.results;
      },err=>{
        
      }
    );
  }


  goToCertainMovie(movieId:any,title:any){
    let slug = this.apiService.getMovieSlug(title);
    this.route.navigateByUrl('movie/'+movieId+'-'+slug);
  }

  getMovieImage(path:any) {
      return (environment.imageUrl+'/'+path);
  }


}
