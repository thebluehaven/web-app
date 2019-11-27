import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BuildingObject } from 'src/app/CONSTANTS';

@Component({
    selector: 'app-customize',
    templateUrl: './customize.component.html',
    styleUrls: ['./customize.component.css']
})

export class CustomizeComponent implements OnInit {
    @Input()
    public data: any;
    @Output()
    public goForward: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

    totalPrice = 0;
    totalAmenitiesPrice = 0;

    amenitiesSelectedCount = 0;

    selectedObj = {
        basic_amenities: [],
        furnishing_amenities: []
    };

    ngOnInit() {
        // tslint:disable-next-line: no-string-literal
        this.data['furnishing_amenities'].map(x => {
            return { ...x, selected: false };
        });

        // tslint:disable-next-line: no-string-literal
        this.data['basic_amenities'].map(x => {
            return { ...x, selected: false };
        });

        this.totalPrice = this.data.room_type[0].price;
    }

    changePrice(item: any) {
        if (item.selected) {
            this.totalPrice += parseInt(item.price);
            this.totalAmenitiesPrice += parseInt(item.price);
            this.amenitiesSelectedCount += 1;
        } else {
            this.totalPrice -= parseInt(item.price);
            this.totalAmenitiesPrice -= parseInt(item.price);
            this.amenitiesSelectedCount -= 1;
        }
        this.modifyAmenities(item);
    }

    modifyAmenities(item) {
        if (item.id) {
            // tslint:disable-next-line: max-line-length
            this.selectedObj.basic_amenities.indexOf(item.id) === -1 ? this.selectedObj.basic_amenities.push(item.id) : this.selectedObj.basic_amenities.filter(x => x.id === item.id);
        }
    }
}
