import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  back: boolean = false;

  constructor(
    private dataService: DataService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    
  }
  
  goHome() {
    this.router.navigateByUrl('');
  }

  goBack() {
    this.location.back();
  }

}
