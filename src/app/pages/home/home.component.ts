import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../global/services/movies/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies=[];
  category:string='';
  search:string='';

  constructor(private moviesService:MoviesService, private router:Router) { }

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
  profileMovie(item){
    console.log(item);
    // this.router.navigate(['/movie'])
  }
}
