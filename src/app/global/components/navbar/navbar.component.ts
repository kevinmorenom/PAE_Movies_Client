import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private socket:SocketsService) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('token');
    this.socket.disconnect();
  }

}
