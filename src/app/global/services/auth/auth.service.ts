import { Injectable } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private socket:SocketsService) { }

  //Saves token in local storage
  save(data){
    localStorage.setItem('token' ,data.token);
    this.socket.connect(data.token);
  }

  //Obtain the token
  get(){
   return localStorage.getItem('token'); //Not sure if its get or getItem  
  }

  //Does not obtain the toke, just validates if you are logged in or not 
  isLogged(){
    return !!localStorage.getItem('token'); //If it exist returns true if not false
  }
}
