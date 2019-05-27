import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
url='https://jsonp.afeld.me/?url=https://api.myglamapp.pl/api/categories?language=EN';
  constructor(private _http: HttpClient) { }
  getUsers(){
    return this._http.get(this.url);
  }
}
