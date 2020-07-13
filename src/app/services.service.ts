import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as constants from './CONSTANTS';
import { textLocalApi, defaultNum, senderId, textLocalUrl } from './CONSTANTS';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  api = textLocalApi;
  numbers = defaultNum;
  senderId = senderId;

  data = 'apikey=' + this.api + '&numbers=' + this.numbers + '&sender=' + this.senderId + '&message=This is test message';
  payload = {
    apikey: this.api,
    numbers: this.numbers,
    sender: this.senderId,
    message: 'This is test message'
  };

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

    if (data.type) {
      str += 'type=' + data.type;
    }
    if (data.location) {
      str += '&location=' + data.location;
    }
    if (data.budget) {
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

  postLead(data: any): Observable<any> {
    return this.http.post<any>(constants.baseUrl + 'request', data, this.httpOptions);
  }

  getImagesByBuildingId(id: string): Observable<any> {
    return this.http.get<any>(constants.baseUrl + 'buildings/' + id + '/images').pipe(
      map(res => {
        // tslint:disable-next-line: no-string-literal
        return res['result'];
      })
    );
  }

  sendSms(): Observable<any> {
    return this.http.get<any>(textLocalUrl + this.data);
  }
}
