import { Component, OnInit, Input } from '@angular/core';

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

}
