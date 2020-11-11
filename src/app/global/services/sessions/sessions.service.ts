import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private http:HttpClient) { }

  signUp(data:any):Promise<any>{
    const url = environment.apiUrl; //AQUI FALTA AGREGAR EL RESTO DEL ENDPOINT PARA COMPLETAR LA URL, MIN 50:31
    return this.http.post(url, data).toPromise();
  }

  login(credentials:any):Promise<any>{
    const url = environment.apiUrl; //AQUI FALTA AGREGAR EL RESTO DEL ENDPOINT PARA COMPLETAR LA URL, MIN 50:31
    return this.http.post(url, credentials).toPromise();
  }
}
