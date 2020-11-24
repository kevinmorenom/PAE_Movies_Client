import { Component } from '@angular/core';
import { SocketsService } from './global/services/sockets/sockets.service';
import { AuthService } from './global/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PAE-Movies-Client';
  
  constructor(private socket:SocketsService, private authService:AuthService){
    if(this.authService.isLogged()){
      this.socket.connect(this.authService.get());
    }
  }
}
