import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../../../global/services/sockets/sockets.service'
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  apiUrl = environment.apiUrl;
  user: any
  imgsrc:any

  constructor(private socket:SocketsService, private userService:UserService, private auth:AuthService, private router:Router) { }

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
      this.imgsrc = environment.apiUrl + "/assets/pps/"+this.user._id+".jpeg";
      console.log("This is the data:", data)
    }).catch(err => {
      if(err.status == "401") {console.log("redirect register")
      localStorage.removeItem('token');
      this.router.navigate(['/'])};

      console.log(err);
    })
  }

  setDefault(){
    if(this.user.googleId){
      this.imgsrc = this.user.photoUrl;
    }else{
      this.imgsrc = environment.apiUrl + "/assets/pps/defaultpp.png";
    }
  }


}
