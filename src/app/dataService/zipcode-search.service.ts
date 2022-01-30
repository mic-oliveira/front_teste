import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeSearchService {

  constructor(private http: HttpClient) { }

  search(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
