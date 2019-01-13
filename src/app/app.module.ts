import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { MovieComponent } from './Components/movie/movie.component';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { MovieItemComponent } from './Components/movie-item/movie-item.component';

//services
import { ApiService } from './Services/api/api.service';
import { DataService } from './Services/data/data.service';
import { CastComponent } from './Components/cast/cast.component';
import { SimilarMovieComponent } from './Components/similar-movie/similar-movie.component';
import { RecommendedMovieComponent } from './Components/recommended-movie/recommended-movie.component';

//libraries
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    HomeLayoutComponent,
    MovieItemComponent,
    CastComponent,
    SimilarMovieComponent,
    RecommendedMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [
    ApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
