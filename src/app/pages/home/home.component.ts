import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../global/services/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies=[];

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.getPopular();
  }


  getPopular(){
    this.moviesService.getPopulars().then(data =>{
      this.movies = data;
      console.log(data);
    }).catch(err =>{
      console.log(err);
    })
  }
}
