import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../../../global/services/sockets/sockets.service'
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  apiUrl = environment.apiUrl;
  user: any

  constructor(private socket:SocketsService, private userService:UserService, private auth:AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  logOut(){
    localStorage.removeItem('token');
    this.socket.disconnect();
  }

  getUser(){
    this.userService.getUserByToken().then(data => {
      this.user = data;
      console.log("This is the data:", data)
    }).catch(err => {
      console.log(err);
    })
  }


}
