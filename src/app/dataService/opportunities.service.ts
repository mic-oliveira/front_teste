import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {

  constructor(private http: HttpClient) { }

  listOpportunities() {
    return this.http.get(`${environment.url}/opportunities`,
      { headers: new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('token')}`)});
  }
}
