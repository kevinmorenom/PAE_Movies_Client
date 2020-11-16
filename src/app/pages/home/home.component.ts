import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../global/services/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies=[];
  category:string='';
  search:string='';

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(category?){
    this.moviesService.getMovies(category).then(data =>{
      this.movies = data;
      console.log(data);
    }).catch(err =>{
      console.log(err);
    })
  }

  getCategory(){
    this.getMovies(this.category);
  }

  searchMovie(){
    this.moviesService.searchMovie(this.search).then(data=>{
      this.movies = data;
    }).catch(err => {
      console.log(err);
    })
  }
}
