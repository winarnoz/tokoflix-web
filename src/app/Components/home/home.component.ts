import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:any = [];

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
        this.items = res.results;
        console.log(res);
      },err=>{ 
      }
    );
  }
  

}
