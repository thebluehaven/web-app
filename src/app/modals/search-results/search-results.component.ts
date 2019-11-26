import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

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
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.firstFormGroup = this.formBuilder.group({
      });
      this.secondFormGroup = this.formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }

    goForward($event: string, stepper: MatStepper) {
        this.selectedBuilding = $event;
        stepper.next();
    }
}
