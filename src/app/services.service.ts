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

  params = {
    client_id: '431560667458-ftammf1cn0lkfcq4nurog14b2790drc6.apps.googleusercontent.com',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    scope: 'spreadsheets',
    client_secret: 'Dv3Y8eByHLcNEjAigWZ0VYZ0'
  };

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


  getAccessToken() {
    return this.http.post<any>('https://accounts.google.com/o/oauth2/v2/auth', this.params).pipe(
      map(res => {
        // tslint:disable-next-line: no-string-literal
        return res['result'];
      }));
  }
}
