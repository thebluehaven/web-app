import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupModalComponent } from 'src/app/modals/popup-modal/popup-modal.component';

export interface Type {
    value: string;
    viewValue: string;
}

export interface LookingFor {
    value: string;
    viewValue: string;
}

export interface Location {
    value: string;
    viewValue: string;
}

export interface Budget {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-section-two',
    templateUrl: './section-two.component.html',
    styleUrls: ['./section-two.component.css']
})

export class SectionTwoComponent {
    types: Type[] = [
        { value: '1bhk', viewValue: '1 BHK' },
        { value: '2bhk', viewValue: '2 BHK' },
        { value: '1rk', viewValue: '1 RK' }
    ];

    lookingForOptions: LookingFor[] = [
        { value: 'bachelor', viewValue: 'Bachelor' },
        { value: 'family', viewValue: 'Family' },
    ];

    locations: Location[] = [
        { value: 'sjp', viewValue: 'Sarjapur Road' },
        { value: 'kdh', viewValue: 'Kodathi' },
        { value: 'hlk', viewValue: 'Halanayakanhalli' }
    ];

    budgets: Budget[] = [
        { value: '8k-9k', viewValue: '8k-9k' },
        { value: '9k-11k', viewValue: '9k-11k' },
        { value: '11k-14k', viewValue: '11k-14k' },
        { value: '4k-17k', viewValue: '14k-17k' },
        { value: '17k-20k', viewValue: '17k-20k' },
        { value: '20kplus', viewValue: '20k above' }
    ];

    selected = {
        type : {},
        lookingForOption: {},
        location: {},
        budget: {}
    };

    constructor(public dialog: MatDialog) { }

    submitRequest() {
        // console.log(this.selected);
        // tslint:disable-next-line: no-string-literal
        // tslint:disable-next-line: max-line-length
        if (!this.selected.budget['value'] && !this.selected.location['value'] && !this.selected.lookingForOption['value'] && !this.selected.type['value']){ }
        else {this.openDialog(); }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupModalComponent, {
          width: '850px',
          height: '90vh',
          data: {...this.selected, type: 'search'}
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        //   this.animal = result;
        });
      }

      reset() {
          this.selected = {
            type : {},
            lookingForOption: {},
            location: {},
            budget: {}
        };
      }
}
