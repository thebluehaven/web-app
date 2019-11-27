import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
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
    @Input()
    data: any;
    @Output()
    public goForward: EventEmitter<BuildingObject> = new EventEmitter<BuildingObject>();
    buildings: BuildingObject[];

    room_type: string

    constructor(public dialog: MatDialog, private appService: ServicesService) { }

    openVideoDialog(link: string): void {
        const dialogRef = this.dialog.open(PopupModalComponent, {
            width: '1100px',
            data: { video: link, type: 'video' }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
        });
    }

    openGalleryDialog(): void {
        const dialogRef = this.dialog.open(PopupModalComponent, {
            width: '1000px',
            height: '90vh',
            data: { type: 'gallery' }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
        });
    }

    openLocationDialog(buidling: any): void {
        const dialogRef = this.dialog.open(PopupModalComponent, {
            width: '1000px',
            height: '90vh',
            data: { ...buidling, type: 'location' }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
        });
    }

    ngOnInit() {
        this.room_type = this.data.aType.value;
        this.getBuildings();
    }

    getBuildings(): void {
        const payload = {
            type: this.data.aType.value,
            budget: this.data.budget.value,
            location: this.data.location.value
        }
        this.appService.getFilteredBuildings(payload)
            .subscribe(buildings => this.buildings = buildings.map(x => {
                const bPrice = []; const bDeposit = [];
                let availableCount = 0;
                x.room_type.forEach(element => {
                    availableCount += element.available;
                    bPrice.push(element.price);
                    bDeposit.push(element.deposit);
                });
                return {
                    name: x.name,
                    room_type: x.room_type,
                    building_id: x.building_id,
                    // room_type: x.room_type.filter(z => z.room_id.split('_')[1] === this.room_type),
                    rooms: x.room_type.map((y: { name: string; }) => y.name).join(' | '),
                    price: Math.min(...bPrice),
                    location: x.location,
                    deposit: Math.min(...bDeposit),
                    video_link: x.video_link,
                    photos_link: x.photos_link,
                    short_name: x.short_name,
                    description: x.description,
                    available: x.available ? availableCount : false,
                    location_map: x.location_map,
                    near_by: x.near_by,
                    building_amenities: x.building_amenities,
                    furnishing_amenities: x.furnishing_amenities,
                    basic_amenities: x.basic_amenities
                };
            }));
    }
}
