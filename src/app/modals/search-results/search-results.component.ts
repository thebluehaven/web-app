import { Component, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

export interface Building {
    name: string;
    flats: string;
    price: string;
    location: string;
    deposit: string;
    video: string;
}

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent {
    @Input()
    public data: any;

    buildings: Building[] = [
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: 'https://www.youtube.com/embed/eKBDBCnxadQ'
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: ''
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: ''
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: ''
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: ''
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: ''
        }
    ];


    constructor(public dialog: MatDialog) { }

    openVideoDialog(link: string): void {
        const dialogRef = this.dialog.open(PopupModalComponent, {
            width: '1100px',
            data: { video: link, type: 'video' }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    openGalleryDialog(): void {
        const dialogRef = this.dialog.open(PopupModalComponent, {
            width: '1000px',
            height: '90vh',
            data: { type: 'gallery' }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    openLocationDialog(): void {
        const dialogRef = this.dialog.open(PopupModalComponent, {
            width: '1000px',
            height: '90vh',
            data: { type: 'location' }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
