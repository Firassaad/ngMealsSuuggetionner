import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrpRepasService {
  serviceApiUrl: string = 'http://localhost:8080/calc';
  constructor(private http: HttpClient) { }
  public getAll(cal : number) {
    return this.http.get(this.serviceApiUrl);
  }


addCal(cal:number): any  {
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(cal);
  console.log(body)
  return this.http.post(this.serviceApiUrl+"?cal="+ cal, body,{'headers':headers})
}
}