import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  getApiJSON(returnData){
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe( data => {
      returnData(data);
    })
  }

  insertarReporte(json, returnData){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    this.http.post('http://localhost:8001/insertarReporte', JSON.stringify(json), {headers: headers}).subscribe( data => {
      returnData(data);
    })
  }

  consultarReportes(returnData) {
    this.http.get('http://localhost:8001/consultarReportes').subscribe( data => {
      returnData(data);
    })
  }
}
