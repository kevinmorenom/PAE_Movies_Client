import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient, private auth:AuthService) { }

  getMovies(category=''):Promise<any>{
    const url = (`${environment.apiUrl}/movie/get/`+category);
    const httpHeaders=new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.get(url, { headers:httpHeaders}).toPromise();
  }

  searchMovie(search=''):Promise<any>{
    console.log(search);
    const url = (`${environment.apiUrl}/movie/search?query=`+search);
    const httpHeaders = new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.get(url, { headers:httpHeaders} ).toPromise();
  }

}

