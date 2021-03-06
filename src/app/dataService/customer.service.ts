import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  listCustomers() {
    return this.http.get(`${environment.url}/customers`,
      { headers: new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('token')}`)});
  }
}
