import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as constants from './CONSTANTS';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getBuildings(): Observable<constants.BuildingObject[]> {
    return this.http.get<constants.BuildingObject[]>(constants.baseUrl + 'buildings').pipe(
      map(res => {
        // tslint:disable-next-line: no-string-literal
        return res['result'];
      })
    );
  }

  getTestimonials(): Observable<constants.Testimonial[]> {
    return this.http.get<constants.Testimonial[]>(constants.baseUrl + 'testimonials').pipe(
      map(res => {
        // tslint:disable-next-line: no-string-literal
        return res['result'];
      })
    );
  }
}
