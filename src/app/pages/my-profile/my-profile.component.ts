import { Component, OnInit } from '@angular/core';
import { UserService } from '../../global/services/user/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  watched=[];

  constructor(private userService:UserService ) { }

  ngOnInit(): void {
    this.getWatched();
  }

  getWatched(){
    this.userService.getWatched().then(data =>{
      this.watched = data;
      console.log(data);
    }).catch(err =>{
      console.log(err);
    })
  }
}
