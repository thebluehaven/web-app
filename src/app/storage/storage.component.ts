import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { StorageFormComponent } from "./storage-form/storage-form.component";

@Component({
  selector: "app-storage",
  templateUrl: "./storage.component.html",
  styleUrls: ["./storage.component.scss"],
})
export class StorageComponent {
  questions = [
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.1 I am not physically present in the city, can i still avail the service?",
      ans:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas turpis scelerisque placerat felis.",
    },
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.2 I have my things struck at PG, will you be able to help me?",
      ans:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas turpis scelerisque placerat felis.",
    },
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.3 I am out of city. How can I vacate my flat?",
      ans:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas turpis scelerisque placerat felis.",
    },
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.4 What is your price structure?",
      ans:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas turpis scelerisque placerat felis.",
    },
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.5 I am out of city. How can I vacate my flat?",
      ans:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas turpis scelerisque placerat felis.",
    },
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.6 I am out of city. How can I vacate my flat?",
      ans:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas turpis scelerisque placerat felis.",
    },
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.7 I am out of city. How can I vacate my flat?",
      ans:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas turpis scelerisque placerat felis.",
    },
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.8 I am out of city. How can I vacate my flat?",
      ans:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas turpis scelerisque placerat felis.",
    },
  ];
  constructor(public dialog: MatDialog) {}

  openForm() {
    this.dialog.open(StorageFormComponent, {
      panelClass: ["animate__animated", "animate__slideInUp", "form-modal"],
      width: "50vw",
      height: "auto",
    });
  }
}
