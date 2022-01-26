import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  listCustomers() {
    return this.http.get(`${environment.url}/people`);
  }

  findCustomer(id: string | number) {
    return this.http.get(`${environment.url}/people/${id}`);
  }
}
