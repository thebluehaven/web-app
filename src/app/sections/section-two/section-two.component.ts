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
    styleUrls: ['./section-two.component.scss']
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
        { value: 'kdt', viewValue: 'Kodathi' },
        { value: 'hlk', viewValue: 'Halanayakanhalli' }
    ];

    budgets: Budget[] = [
        { value: '<10', viewValue: 'Less than 10k' },
        { value: '10-15', viewValue: '10k - 15k' },
        { value: '15-20', viewValue: '15k -20k' },
        { value: '>20', viewValue: '20k above' }
    ];

    selected = {
        aType : {},
        lookingForOption: {},
        location: {},
        budget: {}
    };

    constructor(public dialog: MatDialog) { }

    submitRequest() {
        // tslint:disable-next-line: max-line-length
        if (!this.selected.budget['value'] && !this.selected.location['value'] && !this.selected.lookingForOption['value'] && !this.selected.aType['value']){ }
        else {this.openDialog(); }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupModalComponent, {
          width: '900px',
          height: '90vh',
          data: {...this.selected, type: 'search'}
        });
        dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   this.animal = result;
        });
      }

      reset() {
          this.selected = {
            aType : {},
            lookingForOption: {},
            location: {},
            budget: {}
        };
      }
}
