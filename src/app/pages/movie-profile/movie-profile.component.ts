import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../global/services/movies/movies.service';
import { SocketsService } from '../../global/services/sockets/sockets.service';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.scss']
})
export class MovieProfileComponent implements OnInit {

  similar:any;
  currentMovie:any;
  
  // @Input() currentMovie:any;
  MovieId:number;

  constructor(private socket:SocketsService,private moviesService:MoviesService,private activatedRoute:ActivatedRoute, private movieService:MoviesService, private router:Router) { 
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
      if(err.status == "401") {console.log("redirect register")
      localStorage.removeItem('token');
      this.router.navigate(['/'])};
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

  
  watched(){
    console.log("movieHomeCompnt: " + this.currentMovie.original_title);
    console.log(this.currentMovie);
    this.socket.emit('watchedMovies', this.currentMovie);
    let movieData={
      "id":this.currentMovie.id,
      "original_title":this.currentMovie.original_title,
      "poster_path":this.currentMovie.poster_path
    }
    this.moviesService.watchMovie(movieData).then(data =>{
      console.log('Se marco como vista');
    }).catch(err =>{
      console.log(err);
    })
  }

  toWatch(){
    console.log("movieHomeCompnt: " + this.currentMovie.original_title);
    console.log(this.currentMovie);
    let movieData={
      "id":this.currentMovie.id,
      "original_title":this.currentMovie.original_title,
      "poster_path":this.currentMovie.poster_path
    }
    this.moviesService.toWatchMovie(movieData).then(data =>{
      console.log('Se agregó a la lista 2watch');
    }).catch(err =>{
      console.log(err);
    })
  }

}
