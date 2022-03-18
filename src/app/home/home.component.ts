import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //service 
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];

  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getTreanding('movie').subscribe((response)=>{
      this.trendingMovies = response.results.slice(0,10);

    })
    this._MoviesService.getTreanding('tv').subscribe((response)=>{
      this.trendingTv = response.results.slice(0,10);

    })
    this._MoviesService.getTreanding('person').subscribe((response)=>{
      this.trendingPeople = response.results.slice(0,10);

    })
  }

}
