import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() items: [any];

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  goToDetail(movieId:number, title:string) {
    title = this.apiService.getMovieSlug(title);
    this.route.navigateByUrl('movie/'+movieId+"-"+title);
  }

  onScroll() {
    console.log("scrolled");
  }

}
