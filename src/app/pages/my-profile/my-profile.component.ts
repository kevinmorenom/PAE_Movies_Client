import { Component, OnInit } from '@angular/core';
import { UserService } from '../../global/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  watched = [];
  toWatch = [];

  constructor(private userService: UserService, private router:Router) {
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
      console.log("status: ", err.status);
      if(err.status == "401") {console.log("redirect register")
      localStorage.removeItem('token');
      this.router.navigate(['/'])};
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
