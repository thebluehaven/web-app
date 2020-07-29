import { Component, Inject, ViewChild, ElementRef } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ServicesService } from "src/app/services.service";
import { MessagesService } from "src/app/messages.service";
import * as moment from "moment";
import * as CONSTANTS from "../../CONSTANTS";
@Component({
  selector: "app-storage-form",
  templateUrl: "./storage-form.component.html",
  styleUrls: ["./storage-form.component.scss"],
})
export class StorageFormComponent {
  selectedService = 1;
  otpSent = false;
  otpDidNotMatched = false;
  otpEntered = "";
  otpSentToCustomer = "";
  mobileVerified = false;
  otherItem = "";
  items = [
    { id: "1", name: "Single Bed", count: 0 },
    { id: "4", name: "Double Bed", count: 0 },
    { id: "2", name: "TV", count: 0 },
    { id: "3", name: "Fridge", count: 0 },
    { id: "5", name: "Sofa", count: 0 },
    { id: "6", name: "Table", count: 0 },
    { id: "7", name: "Suitcase", count: 0 },
    { id: "8", name: "Bike", count: 0 },
    { id: "9", name: "Car", count: 0 },
  ];

  formFields = {
    email: "",
    firstName: "",
    lastName: "",
    serviceType: ["Pack", "Move", "Storage"],
    address: "",
    mobile: "",
    selectedItems: [],
    fromLocation: "",
    toLocation: "",
  };
  focused = false;
  submitted = false;

  @ViewChild("otherItemDir", { static: false }) otherItemDir: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<StorageFormComponent>,
    private service: ServicesService,
    private otpService: MessagesService
  ) {}

  toggleSelectedService(val) {
    this.selectedService = val;
    this.formFields.serviceType =
      val === 1 ? ["Pack", "Move", "Storage"] : ["Move out"];
  }

  decreaseCount(item) {
    const index = this.items.findIndex((x) => x.id === item.id);
    this.items[index].count =
      this.items[index].count > 0 ? this.items[index].count - 1 : 0;
    this.formFields.selectedItems = [...this.items.filter((x) => x.count)];
  }

  increaseCount(item) {
    const index = this.items.findIndex((x) => x.id === item.id);
    if (this.items[index].count >= 9) {
      return;
    }
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

  getEmailVerified(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  isNumberKey(evt) {
    const charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    this.service.createItemMondayCom(this.formFields.firstName, {
      ...this.formFields,
      id: this.generateCustomerID(),
    });
    // this.onNoClick();
  }

  handleToLocationChange(event) {
    this.formFields.toLocation = event.formatted_address;
  }

  handleFromLocationChange(event) {
    this.formFields.fromLocation = event.formatted_address;
  }

  addOtherItem(item) {
    if (item.length < 3) {
      return;
    }
    this.items.push({ id: this.items.length + 1 + "", name: item, count: 1 });
    this.formFields.selectedItems = [...this.items.filter((x) => x.count)];
    this.otherItem = "";
    this.focused = false;
  }

  sendOtpToCustomer() {
    this.submitted = true;
    if (!this.checkForm()) {
      return false;
    }
    this.otpSentToCustomer = Math.floor(Math.random() * 10000) + "";
    this.otpService
      .sendOtp(
        this.formFields.mobile,
        this.formFields.firstName,
        this.otpSentToCustomer
      )
      .subscribe((res) => {
        if (res.Status === "Success") {
          this.otpSent = true;
          this.onSubmit();
        }
      });
  }

  verifyOtp() {
    if (this.otpSentToCustomer === this.otpEntered) {
      this.mobileVerified = true;
    } else {
      this.otpDidNotMatched = true;
    }
    this.mobileVerified = true;
    setTimeout(() => {
      this.onNoClick();
      this.sendCustomerId();
    }, 6000);
  }

  resendOtp() {
    this.otpService
      .sendOtp(
        this.formFields.mobile,
        this.formFields.firstName,
        this.otpSentToCustomer
      )
      .subscribe((res) => {
        if (res.Status === "Success") {
          this.otpSent = true;
        }
      });
  }

  sendCustomerId() {
    this.otpService
      .sendCustomerId(
        this.formFields.mobile,
        this.formFields.firstName,
        this.generateCustomerID()
      )
      .subscribe((res) => {
        if (res.Status === "Success") {
          this.otpSent = true;
        }
      });
  }

  generateOtp() {
    return 1000 + Math.floor(Math.random() * 8999);
  }

  generateCustomerID() {
    return (
      this.formFields.firstName.substr(0, 3).toUpperCase() +
      Math.floor(Math.random() * 1000) +
      moment(new Date()).format("DDMMYY")
    );
  }

  getSrcImg(name) {
    if (
      (name.length < 2 && (name !== "TV" || name !== "AC")) ||
      CONSTANTS.arrayOfItems[name.toLowerCase().substr(0, 3)] === undefined
    ) {
      return "assets/images/items/other-item.png";
    }
    return CONSTANTS.arrayOfItems[name.toLowerCase().substr(0, 3)];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
