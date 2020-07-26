import { Injectable, OnInit } from "@angular/core";
import * as CONSTANTS from "./CONSTANTS";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  payloadSendText = {
    From: CONSTANTS.senderId,
    TemplateName: "BlueHaven OTP",
    VAR1: "",
    VAR2: "",
    To: "",
  };

  constructor(private http: HttpClient) {}

  // sendSms(): Observable<any> {
  //   return this.http.get<any>(textLocalUrl + this.data);
  // }

  // getAPI(num, otp) {
  //   return (
  //     "apikey=" +
  //     this.api +
  //     "&numbers=" +
  //     num +
  //     "&sender=" +
  //     this.senderId +
  //     "&message=Hi, Welcome to BlueHaven. Your OTP is " +
  //     otp
  //   );
  // }

  getPayload(phone, name, otp) {
    this.payloadSendText.To = phone;
    this.payloadSendText.VAR1 = name;
    this.payloadSendText.VAR2 = otp;
    return this.payloadSendText;
  }

  sendOtp(phone, name, otp): Observable<any> {
    return this.http.post<any>(CONSTANTS.sendTextApi, this.getPayload(phone, name, otp));
  }
}
