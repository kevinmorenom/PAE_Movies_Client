import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  clickedMovie = new BehaviorSubject('hola');

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

  setClick(item){
    console.log("Set Click"+item);
    this.clickedMovie.next(item)
  }

  getSimilar(movieId): Promise<any>{
    const url = (`${environment.apiUrl}/movie/similar/?id=`+movieId);
    const httpHeaders = new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.get(url, { headers:httpHeaders} ).toPromise();

  }

  getOne(MovieId):Promise<any>{
    const url = (`${environment.apiUrl}/movie/getOne/`+MovieId);
    const httpHeaders=new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.get(url, { headers:httpHeaders}).toPromise();
  }

  watchMovie(movie){
    console.log(movie);
    const url = (`${environment.apiUrl}/watched/post/`);
    const httpHeaders=new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.post(url,movie, { headers:httpHeaders}).toPromise();
  }

  toWatchMovie(movie){
    console.log(movie);
    const url = (`${environment.apiUrl}/toWatch/post/`);
    const httpHeaders=new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.post(url,movie, { headers:httpHeaders}).toPromise();
  }

  deleteToWatch(movie){
    console.log(movie);
    const url = (`${environment.apiUrl}/toWatch/delete/${movie.id}`);
    const httpHeaders=new HttpHeaders({
      authorization:this.auth.get()
    })
    return this.http.delete(url, {headers:httpHeaders}).toPromise();
  }}

