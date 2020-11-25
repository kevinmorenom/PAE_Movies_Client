import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.scss']
})
export class WatchedComponent implements OnInit {

  @Input() movies:any[] = [];
  constructor() { }

  ngOnInit(): void {
  } 

}
