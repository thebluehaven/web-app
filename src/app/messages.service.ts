import { Injectable, OnInit } from '@angular/core';
import { textLocalApi, defaultNum, senderId, textLocalUrl } from './CONSTANTS';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  api = encodeURIComponent(textLocalApi);
  numbers = defaultNum;
  senderId = encodeURIComponent(senderId);

  payload = {
    apikey: this.api,
    numbers: this.numbers,
    sender: this.senderId,
    message: 'This is test message'
  };
  constructor(private http: HttpClient) { }

  sendSms(): Observable<any> {
    return this.http.post<any>(textLocalUrl, this.payload, this.httpOptions);
  }
}
