import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estudios } from '../components/Estudios';
import { ESTUDIOS } from '../components/mockEstudios';
import {HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  
  constructor(private http:HttpClient) { }
  private url = 'http://localhost:4201/estudios'
  verEstudios():Observable<Estudios[]>{

    
    const estudios = of(ESTUDIOS);

    return estudios;
  }

  borrar(estudios : Estudios):Observable<Estudios>{
    const url=`${this.url}/${estudios.id}`
    return this.http.delete<Estudios>(url)
  }
  update(estudios : Estudios):Observable<Estudios>{
    const url=`${this.url}/${estudios.id}`
    return this.http.put<Estudios>(url, estudios, httpOptions)
  }
  add(estudios : Estudios):Observable<Estudios>{
    return this.http.post<Estudios>(this.url, estudios)
  }
}
