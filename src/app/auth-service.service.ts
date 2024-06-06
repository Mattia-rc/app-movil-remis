import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = `http://localhost:7000/api`
  
  
  token:string | null = null

  constructor(private http: HttpClient) { }
  

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  setUsername(username: string): void {
    localStorage.setItem('username', username);
  }

  getUsername(): string {
    return localStorage.getItem('username') ?? '';
  }

  setName(name: string): void {
    localStorage.setItem('name', name);
  }

  getName(): string {
    return localStorage.getItem('name') ?? '';
  }


  register(data:any):Observable<any>{
    console.log( "la data es: "+ data)
    console.log(`${this.baseUrl}/register`,data)
    return this.http.post(`${this.baseUrl}/register`,data,{responseType: 'text'})
  }
  
  login(data:any):Observable<any> {
    console.log(data)
    return this.http.post(`${this.baseUrl}/login`, data,{responseType: 'text'})
  }
  
  vistaMovil(data:any):Observable<any>{
    console.log("la data del movil es:", data)
    return this.http.post(`${this.baseUrl}/vista/movil`, data, {responseType: 'text'})
  }

  serviciosMovil(data:any):Observable<any>{
    console.log("los servicios del movil es: ", data);
    return this.http.post(`${this.baseUrl}/vista/servicio`, data, {responseType:'text'})
  }

}
