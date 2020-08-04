import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { StorageFormComponent } from '../storage-form/storage-form.component';
// import { MatDialog } from "@angular/material/dialog";
// import { StorageFormComponent } from "./storage-form/storage-form.component";

@Component({
  selector: "app-storage-mob",
  templateUrl: "./storage-mob-ui.component.html",
  styleUrls: ["./storage-mob-ui.component.scss"],
})
export class StorageMobUiComponent {
  questions = [
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.1 I am not physically present in the city, can i still avail the service?",
      ans:
        "Yes. You can still avail the services.",
    },
    // tslint:disable-next-line: max-line-length
    {
      ques: "Q.2 I have my things struck at PG, will you be able to help me?",
      ans:
        "Definitely. We will pack and move your stuff on your behalf from your PG to our storage warehouse.",
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(StorageFormComponent, {
      panelClass: ["animate__animated", "animate__slideInUp", "form-modal"],
      width: "100vw",
      height: "auto",
    });
  }
}