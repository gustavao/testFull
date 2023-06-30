import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  baseUrl: string = 'http://127.0.0.1:3001'
  constructor(private http: HttpClient) { }

  getAllInfo(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/estudiantes`);
  }

  addAlumn(payload: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/estudiantes`, payload);
  }

  addNote(payload: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/calificaciones`, payload);
  }

}