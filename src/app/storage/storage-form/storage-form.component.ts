import { Component, Inject } from "@angular/core";
import {
  MatDialogRef,
} from "@angular/material/dialog";
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: "app-storage-form",
  templateUrl: "./storage-form.component.html",
  styleUrls: ["./storage-form.component.scss"],
})
export class StorageFormComponent {
  selectedService = 1;
  items = [
    { id: "1", name: "Bed", count: 0 },
    { id: "2", name: "Television", count: 0 },
    { id: "3", name: "Refrigerator", count: 0 },
    { id: "4", name: "Almirah", count: 0 },
    { id: "5", name: "AC", count: 0 },
    { id: "6", name: "Table", count: 0 },
    { id: "7", name: "Chair/s", count: 0 },
  ];

  formFields = {
    email: "",
    firstName: "",
    lastName: "",
    serviceType: "",
    address: "",
    mobile: "",
    selectedItems: [],
    fromLocation: "",
    toLocation: "",
  };

  submitted = false;
  constructor(public dialogRef: MatDialogRef<StorageFormComponent>, private service: ServicesService) {}

  toggleSelectedService(val) {
    this.selectedService = val;
  }

  decreaseCount(item) {
    const index = this.items.findIndex((x) => x.id === item.id);
    this.items[index].count =
      this.items[index].count > 0 ? this.items[index].count - 1 : 0;
    this.formFields.selectedItems = [...this.items.filter((x) => x.count)];
  }

  increaseCount(item) {
    const index = this.items.findIndex((x) => x.id === item.id);
    this.items[index].count += 1;
    this.formFields.selectedItems = [...this.items.filter((x) => x.count)];
  }

  checkForm() {
    if (
      !this.formFields.email ||
      !this.formFields.firstName ||
      !this.formFields.address ||
      !this.formFields.mobile ||
      this.formFields.mobile.length < 10 ||
      !this.formFields.fromLocation ||
      !this.formFields.toLocation ||
      this.formFields.selectedItems.length === 0
    ) {
      return false;
    }
    return true;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.checkForm()) {
      return false;
    }
    
    this.service.createItemMondayCom(this.formFields.firstName, this.formFields);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
