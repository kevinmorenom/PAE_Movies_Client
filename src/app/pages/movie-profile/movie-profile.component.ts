import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.scss']
})
export class MovieProfileComponent implements OnInit {

  MovieId:number;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(response=>{
      console.log("response",response);
    })
  }

  ngOnInit(): void {
  }

}
