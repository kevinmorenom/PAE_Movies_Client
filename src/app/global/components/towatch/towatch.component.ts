import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-towatch',
  templateUrl: './towatch.component.html',
  styleUrls: ['./towatch.component.scss']
})
export class TowatchComponent implements OnInit {

  @Input() movies:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteToWatch(event){
    console.log(event);
    console.log(this.movies);
    console.log(this.movies.indexOf({"id":event.id}));

  }

}
