import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../global/services/movies/movies.service';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.scss']
})
export class MovieProfileComponent implements OnInit {

  similar:any;
  currentMovie=[];
  
  // @Input() currentMovie:any;
  MovieId:number;

  constructor(private activatedRoute:ActivatedRoute, private movieService:MoviesService) { 
    this.activatedRoute.params.subscribe(response=>{
      console.log("Clicked Movie ID",response);
      this.MovieId=response.id;
      this.getMovieData(this.MovieId);
      this.getSimilar(this.MovieId);

    })
  }

  ngOnInit(): void {
    this.movieService.clickedMovie.subscribe(res =>{
      // this.currentMovie = res;
    });
    
  }

  getMovieData(movieId){
    this.movieService.getOne(movieId).then(data =>{
      this.currentMovie = data;
      console.log(data);
    }).catch(err =>{
      console.log(err);
    })
  }
  getSimilar(movieId){
    this.movieService.getSimilar(movieId).then(data =>{
      this.similar = data;
      console.log(data);
    }).catch(err =>{
      console.log(err);
    })
  }

}
