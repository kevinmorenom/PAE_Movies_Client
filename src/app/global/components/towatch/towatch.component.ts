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
    const pos = this.movies.map(function(e) { return e.id; }).indexOf(event.id);
    this.movies.splice(pos ,1)
  }

}
