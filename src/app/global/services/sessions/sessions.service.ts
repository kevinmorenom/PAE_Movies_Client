import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private http:HttpClient) { }

  signUp(data:any):Promise<any>{
    const url = `${environment.apiUrl}/user/post`; 
    return this.http.post(url, data).toPromise();
  }

  login(credentials:any):Promise<any>{
    const url = `${environment.apiUrl}/user/login`; 
    return this.http.post(url, credentials).toPromise();
  }

  googleLogin(user){
    const url = `${environment.apiUrl}/user/login/google`
    return this.http.post(url,user).toPromise();
  }
}
