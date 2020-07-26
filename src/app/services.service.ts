import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as constants from "./CONSTANTS";
// import { textLocalApi, defaultNum, senderId, textLocalUrl } from "./CONSTANTS";
import { Apollo } from "apollo-angular";
import { HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
@Injectable({
  providedIn: "root",
})
export class ServicesService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  mondayToken =
    // tslint:disable-next-line: max-line-length
    "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjYxOTQ4Mjk3LCJ1aWQiOjExMTk0ODQ5LCJpYWQiOiIyMDIwLTA3LTIyVDE1OjE4OjQyLjAwMFoiLCJwZXIiOiJtZTp3cml0ZSJ9.Ggj8qsvLHwZ8d5bstIfkjOqVK2L1WzQCAo7Jt7c35U8";
  uri = "https://api.monday.com/v2/";

  constructor(
    private http: HttpClient,
    private apollo: Apollo,
    httpLink: HttpLink
  ) {
    const auth = setContext(() => ({
      headers: {
        Authorization: `Bearer ${this.mondayToken}`,
      },
    }));

    apollo.create({
      link: ApolloLink.from([auth, httpLink.create({ uri: this.uri })]),
      cache: new InMemoryCache(),
    });
  }

  getBuildings(): Observable<constants.BuildingObject[]> {
    return this.http
      .get<constants.BuildingObject[]>(constants.baseUrl + "buildings")
      .pipe(
        map((res) => {
          // tslint:disable-next-line: no-string-literal
          return res["result"];
        })
      );
  }

  getFilteredBuildings(data: any): Observable<constants.BuildingObject[]> {
    let str = "";

    if (data.type) {
      str += "type=" + data.type;
    }
    if (data.location) {
      str += "&location=" + data.location;
    }
    if (data.budget) {
      str += "&price=" + data.budget;
    }
    // tslint:disable-next-line: max-line-length
    return this.http
      .get<constants.BuildingObject[]>(
        constants.baseUrl + "buildings/filter/" + str
      )
      .pipe(
        map((res) => {
          // tslint:disable-next-line: no-string-literal
          return res["result"];
        })
      );
  }

  getTestimonials(): Observable<constants.Testimonial[]> {
    return this.http
      .get<constants.Testimonial[]>(constants.baseUrl + "testimonials")
      .pipe(
        map((res) => {
          // tslint:disable-next-line: no-string-literal
          return res["result"];
        })
      );
  }

  postLead(data: any): Observable<any> {
    return this.http.post<any>(
      constants.baseUrl + "request",
      data,
      this.httpOptions
    );
  }

  getImagesByBuildingId(id: string): Observable<any> {
    return this.http
      .get<any>(constants.baseUrl + "buildings/" + id + "/images")
      .pipe(
        map((res) => {
          // tslint:disable-next-line: no-string-literal
          return res["result"];
        })
      );
  }

  public createItemMondayCom = (itemName, columnVals) => {
    this.apollo
      .mutate({
        mutation: gql`
          mutation($myItemName: String!, $columnVals: JSON!) {
            create_item(
              board_id: 643368055
              group_id: "topics"
              item_name: $myItemName
              column_values: $columnVals
            ) {
              id
            }
          }
        `,
        variables: {
          myItemName: itemName,
          columnVals: this.getParsedVals(columnVals),
        },
      })
      .subscribe((result) => {
        // console.log(result);
      });
  };

  public getParsedVals = (values) => {
    const payload = {
      phone: { phone: values.mobile, countryShortName: "IN" },
      email: values.email,
      address1: { text: values.address },
      long_text: { text: values.fromLocation },
      long_text3: { text: values.toLocation },
      text0: values.id,
      long_text0: {
        text: values.selectedItems
          .map((x) => x.count + " " + x.name)
          .join(", "),
      },
      type_of_service: { labels: values.serviceType },
      dropdown8: { labels: ["Website"] },
    };
    return JSON.stringify(payload);
  };
}
