import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(private http: HttpClient) { }

  listSellers() {
    return this.http.get(`${environment.url}/customers`,
      { headers: new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('token')}`)});
  }
}
