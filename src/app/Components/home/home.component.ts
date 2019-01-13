import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:any = [];

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.loadMovies();
    this.dataService.getUserBalance();
  }

  loadMovies() {
    this.spinner.show();
    this.apiService.getNowPlayingMovies().subscribe(
      res=>{
        this.items = res.results;
        console.log(res);
        this.spinner.hide();
      },err=>{ 
        this.spinner.hide();
      }
    );
  }

 

}
