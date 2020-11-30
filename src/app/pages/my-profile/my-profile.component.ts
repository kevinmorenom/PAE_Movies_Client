import { Component, OnInit } from '@angular/core';
import { UserService } from '../../global/services/user/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  watched = [];
  toWatch = [];

  constructor(private userService: UserService) {
    this.getToWatch();

  }

  ngOnInit(): void {
    this.getWatched();
  }

  getWatched() {
    this.userService.getWatched().then(data => {
      this.watched = data;
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
  }

  getToWatch() {
    this.userService.getToWatch().then(data => {
      this.toWatch = data;
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
  }
}
