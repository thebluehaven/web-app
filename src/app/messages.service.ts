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

  getPayload(phone, name, otp) {
    this.payloadSendText.To = phone;
    this.payloadSendText.VAR1 = name;
    this.payloadSendText.VAR2 = otp;
    return this.payloadSendText;
  }

  getCustomerIdPayload(phone, name, id) {
    this.payloadSendText.To = phone;
    this.payloadSendText.TemplateName = "BHThank";
    this.payloadSendText.VAR1 = name;
    this.payloadSendText.VAR2 = id;
    return this.payloadSendText;
  }

  sendOtp(phone, name, otp): Observable<any> {
    return this.http.post<any>(
      CONSTANTS.sendTextApi,
      this.getPayload(phone, name, otp)
    );
  }

  sendCustomerId(phone, name, id) {
    return this.http.post<any>(
      CONSTANTS.sendTextApi,
      this.getCustomerIdPayload(phone, name, id)
    );
  }
}
