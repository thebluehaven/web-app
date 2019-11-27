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

  getFilteredBuildings(data: any): Observable<constants.BuildingObject[]> {
    let str = '';

    if (data.type){
      str += 'type=' + data.type;
    }
    if (data.location){
      str += '&location=' + data.location;
    }
    if (data.budget){
      str += '&price=' + data.budget;
    }
    // tslint:disable-next-line: max-line-length
    return this.http.get<constants.BuildingObject[]>(constants.baseUrl + 'buildings/filter/' + str).pipe(
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
