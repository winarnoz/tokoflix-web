import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {

  @Input() movieId:any;
  casts:any=[];

  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getMovieCasts(this.movieId);
  }

  getMovieCasts(movieId:any) {
    this.apiService.getMovieCredits(movieId).subscribe(
      res=>{
        this.casts = res.cast;
        console.log(this.casts);
      },err=>{
        
      }
    );
  }

  getCastImage(path:any) {
    if(this.dataService.isEmpty(path)) {
      return './assets/images/people-default.png';
    } else {
      return (environment.imageUrl+'/'+path);
    }
  }

}
