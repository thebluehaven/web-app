import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-popup',
    templateUrl: './popup-modal.component.html',
    styleUrls: ['./popup-modal.component.css']
})

export class PopupModalComponent {

    constructor(
        public dialogRef: MatDialogRef<PopupModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}