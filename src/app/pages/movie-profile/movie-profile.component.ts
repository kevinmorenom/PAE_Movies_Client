import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../global/services/movies/movies.service';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.scss']
})
export class MovieProfileComponent implements OnInit {

  @Input() currentMovie:any;
  MovieId:number;

  constructor(private activatedRoute:ActivatedRoute, private movieService:MoviesService) { 
    this.activatedRoute.params.subscribe(response=>{
      console.log("response",response);
    })
  }

  ngOnInit(): void {
    this.movieService.clickedMovie.subscribe(res =>{
      console.log(res);
      this.currentMovie = res;
      console.log(this.currentMovie);
    });
  }

}
