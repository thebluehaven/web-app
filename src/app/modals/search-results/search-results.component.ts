import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { PostObject, Preferences, Building, Contact } from 'src/app/CONSTANTS';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  @Input()
  public data: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  selectedBuilding: any;
  seletedPackage: any;

  dataToPost: PostObject = {
    preferences: {} as Preferences,
    building: {} as Building,
    contact_details: {} as Contact,
  } as PostObject;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
    });
    this.secondFormGroup = this.formBuilder.group({
    });

    this.dataToPost.preferences.type = this.data.aType.value;
    this.dataToPost.preferences.location = this.data.location.value;
    this.dataToPost.preferences.budget = this.data.budget.value;
  }

  goForward($event: string, stepper: MatStepper) {
    if ($event['type'] === 'step1') {
      this.selectedBuilding = $event['building'];
      this.dataToPost.building.building_id = this.selectedBuilding.building_id;
    } else if ($event['type'] === 'step2'){
      this.seletedPackage = $event['package'];
      this.dataToPost.building.basic_amenities = this.seletedPackage.basic_amenities;
      this.dataToPost.building.furnishing_amenities = this.seletedPackage.furnishing_amenities;
    }
    stepper.next();
  }
}
