import { Component, Inject, Input, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { PostObject, Preferences, Building, Contact } from 'src/app/CONSTANTS';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  @Input()
  public data: any;
  @Input()
  public building: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  selectedBuilding: any;
  selectedPackage: any;
  public closePopup: EventEmitter<any> = new EventEmitter<any>();

  dataToPost: PostObject = {
    preferences: {} as Preferences,
    building: {} as Building,
    contact_details: {} as Contact,
  } as PostObject;
  constructor(private formBuilder: FormBuilder, private appService: ServicesService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
    });
    this.secondFormGroup = this.formBuilder.group({
    });

    if (!this.building) {
      this.dataToPost.preferences.type = this.data.aType.value;
      this.dataToPost.preferences.location = this.data.location.value;
      this.dataToPost.preferences.budget = this.data.budget.value;
    }
  }

  goForward($event: string, stepper: MatStepper) {
    if ($event['type'] === 'step1') {
      this.selectedBuilding = $event['building'];
      this.dataToPost.building.building_id = this.selectedBuilding.building_id;
      this.dataToPost.preferences.type = this.selectedBuilding.room_selected;
      stepper.next();
    } else if ($event['type'] === 'step2'){
      this.selectedPackage = $event['package'];
      this.dataToPost.building.basic_amenities = this.selectedPackage.basic_amenities;
      this.dataToPost.building.furnishing_amenities = this.selectedPackage.furnishing_amenities;
      stepper.next();
    } else if ($event['type'] === 'step3') {
      this.dataToPost.contact_details = $event['contact'];
      this.postData();
    }
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  postData() {
    console.log(this.dataToPost);
    this.appService.postLead(this.dataToPost)
            .subscribe(res => console.log(res));
    this.closePopup.emit();
  }
}
