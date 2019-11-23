import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupModalComponent } from '../../popup-modal/popup-modal.component';
import { ServicesService } from 'src/app/services.service';
import { BuildingObject } from 'src/app/CONSTANTS';


@Component({
    selector: 'app-search-results-list',
    templateUrl: './search-results-list.component.html',
    styleUrls: ['./search-results-list.component.css']
})

export class SearchResultsListComponent implements OnInit {
    @Output()
    public goForward: EventEmitter<BuildingObject> = new EventEmitter<BuildingObject>();
    buildings: BuildingObject[];

    constructor(public dialog: MatDialog, private appService: ServicesService) { }

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

    ngOnInit() {
        this.getBuildings();
    }

    getBuildings(): void {
        let availableCount = 0;
        this.appService.getBuildings()
            .subscribe(buildings => this.buildings = buildings.map(x => {
                x.room_type.forEach(element => {
                    availableCount += element.available;
                });
                return {
                    name: x.name,
                    room_type: x.room_type.map((y: { name: string; }) => y.name).join(' | '),
                    price: x.room_type['1bhk'].price,
                    location: x.location,
                    deposit: x.room_type['1bhk'].deposit,
                    video_link: x.video_link,
                    photos_link: x.photos_link,
                    short_name: x.short_name,
                    description: x.description,
                    available : availableCount
                };
            }));
    }
}
