import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {

  constructor(private http: HttpClient) { }

  listOpportunities(seller_name?: string, start_date?: string) {
    return this.http.get(`${environment.url}/opportunities?filter[seller_name]=${seller_name ?? ''}&filter[date_between]=${start_date ?? ''}`,
      { headers: new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('token')}`)});
  }

  storeOpportunity(customer_id: number, product_id: number) {
    console.log(customer_id, product_id)
    return this.http.post(`${environment.url}/opportunities`,
      {customer_id: customer_id, product_id: product_id},
      { headers: new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('token')}`)});
  }

  approveOpportunity(opportunity_id) {
    return this.http.post(`${environment.url}/opportunities/${opportunity_id}/approve`,
      {opportunity_id: opportunity_id},
      { headers: new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('token')}`)});
  }

  refuseOpportunity(opportunity_id) {
    return this.http.post(`${environment.url}/opportunities/${opportunity_id}/refuse`,
      {opportunity_id: opportunity_id},
      { headers: new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('token')}`)});
  }
}
