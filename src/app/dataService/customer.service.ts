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

  createCustomer(data: any) {
    return this.http.post(`${environment.url}/people/`, data);
  }

  updateCustomer(data: any, id: string | number) {
    return this.http.patch(`${environment.url}/people/${id}`, data)
  }

  createOrUpdateCustomer(data: object, id?: string | number) {
    console.log(data);
    return id ? this.updateCustomer(data, id) : this.createCustomer(data);
  }
}
