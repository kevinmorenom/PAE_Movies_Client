import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovies(category=''):Promise<any>{
    const url = (`${environment.apiUrl}/movie/get/`+category);
    return this.http.get(url).toPromise();
  }

}

