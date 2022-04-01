import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  listProducts() {
    return this.http.get(`${environment.url}/products`,
      { headers: new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('token')}`)});
  }
}
