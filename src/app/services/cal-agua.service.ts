import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalAguaService {
  constructor(public http: HttpClient) { }
  obtenerDatos()
  {
    return this.http.get('https://clearwater-28ee5-default-rtdb.firebaseio.com/noticias.json')  }
}
