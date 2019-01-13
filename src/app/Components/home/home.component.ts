import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { DataService } from '../../Services/data/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:any = [];
  page:number = 1;
  maxPage:number;
  language:any = "en-US";
  region:any = "ID";

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private spinner: NgxSpinnerService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadMovies();
    this.dataService.getUserBalance();
  }

  loadMovies() {
    window.scrollTo(0,0);
    this.spinner.show();
    this.apiService.getNowPlayingMovies(this.region,this.language,this.page).subscribe(
      res=>{
        this.items = res.results;
        this.maxPage = res.total_pages;
        this.spinner.hide();
      },err=>{ 
        this.spinner.hide();
      }
    );
  }

  onScroll() {
    if(this.page<this.maxPage) {
      this.page++;
      this.apiService.getNowPlayingMovies(this.region,this.language,this.page).subscribe(
        res=>{
          this.items = this.items.concat(res.results);
          this.route.navigate([''], { queryParams: { page: this.page }});
        },err=>{ 
        }
      );
    }
  }

 

}
