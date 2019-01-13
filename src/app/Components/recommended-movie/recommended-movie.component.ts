import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';
import { environment } from '../../../environments/environment';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommended-movie',
  templateUrl: './recommended-movie.component.html',
  styleUrls: ['./recommended-movie.component.scss']
})
export class RecommendedMovieComponent implements OnInit {

  @Input() movieId:any;
  movies:any=[];

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getRecommendedMovie(this.movieId);
  }

  getRecommendedMovie(movieId:any) {
    this.apiService.getRecommendedMovies(movieId).subscribe(
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
