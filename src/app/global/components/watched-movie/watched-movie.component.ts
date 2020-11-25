import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watched-movie',
  templateUrl: './watched-movie.component.html',
  styleUrls: ['./watched-movie.component.scss']
})
export class WatchedMovieComponent implements OnInit {

  @Input() movie:any;

  constructor() { }

  ngOnInit(): void {
  }

}
