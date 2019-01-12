import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.apiService.getNowPlayingMovies().subscribe(
      res=>{
        console.log(res);
      },err=>{

      }
    );
  }
  

}
