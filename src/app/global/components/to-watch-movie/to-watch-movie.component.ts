import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-to-watch-movie',
  templateUrl: './to-watch-movie.component.html',
  styleUrls: ['./to-watch-movie.component.scss']
})
export class ToWatchMovieComponent implements OnInit {

  @Input() movie:any;
  @Output() deletedMovie:EventEmitter<any>= new EventEmitter;

  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
  }

  deleteToWatch(){
    let movieData = {
      id:this.movie.id
    }
    this.movieService.deleteToWatch(movieData).then(data =>{
      console.log("Se borró la peli");
    }).catch(err => {
      console.log(err);
    })
    this.deletedMovie.emit(movieData);
  }

}
