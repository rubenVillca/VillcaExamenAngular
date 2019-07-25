import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APP_CONSTANTS} from '../paginas';

@Injectable({
  providedIn: 'root'
})
export class GeneradorService {

  constructor(private http: HttpClient) { }

  getJSON(): Observable<any> {
    return this.http.get(APP_CONSTANTS.quoteUrl);
  }
}
