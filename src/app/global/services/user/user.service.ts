import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private auth:AuthService) { }

  getWatched():Promise<any>{
    const url = (`${environment.apiUrl}/watched/get/`);
    const httpHeaders=new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.get(url, { headers:httpHeaders}).toPromise();
  }

  setImage(image):Promise<any>{
    // console.log(image);
    const url = (`${environment.apiUrl}/pp`);
    const httpHeaders=new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.post(url, image ,{ headers:httpHeaders}).toPromise();
  }

  getUserByToken(){
    const url = (`${environment.apiUrl}/user/getByToken`);
    const httpHeaders=new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.get(url ,{ headers:httpHeaders}).toPromise();
  }
}
