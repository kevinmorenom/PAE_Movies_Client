import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getPopulars():Promise<any>{
    const url = ('http://localhost:3001/movie/populars');
    return this.http.get(url).toPromise();
  }

}

