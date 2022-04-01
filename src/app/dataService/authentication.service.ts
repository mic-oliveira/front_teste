import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) {
    return this.http.post(`${environment.url}/auth`, {email: email, password: password}).toPromise();
  }
}
