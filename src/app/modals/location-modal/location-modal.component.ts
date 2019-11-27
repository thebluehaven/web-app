/// <reference types="@types/googlemaps" />
import { Component, Input, OnInit, Inject } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { mapsUrl, homeSvg, marker } from '../../CONSTANTS'

// import { } from '@types/googlemaps';

@Component({
    selector: 'app-location',
    templateUrl: './location-modal.component.html',
    styleUrls: ['./location-modal.component.css']
})
export class LocationModalComponent implements OnInit {
    @Input()
    data: any;
    @ViewChild('gmap', { static: true }) gmapElement: any;
    map: google.maps.Map;


    constructor(@Inject(DOCUMENT) private document: Document) { }
    ngOnInit() {
        // tslint:disable-next-line: prefer-const
        // tslint:disable-next-line: radix

        const lng = parseFloat(this.data.location_map.long);
        const lat = parseFloat(this.data.location_map.lati);
        const building_name = this.data.name;
        const near_by = this.data.near_by.map(x => {
            return {
                loc: {
                    lat: parseFloat(x.Latitude),
                    lng: parseFloat(x.Longitude)
                },
                name: x.name,
                desc: x.Distance
            }
        });

        // tslint:disable-next-line: object-literal-shorthand
        const loc = { lat: lat, lng: lng };
        const mapProp = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        // list of hardcoded positions markers 
        const marker_building = new google.maps.Marker({
            position: loc,
            map: this.map,
            icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(homeSvg), scaledSize: new google.maps.Size(40, 40) },
            optimized: false,
            label: { text: building_name, color: 'brown' }
        });

        for (const data of near_by) {
            // tslint:disable-next-line: prefer-const
            // tslint:disable-next-line: no-unused-expression
            new google.maps.Marker({
                position: data.loc,
                map: this.map,
                icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(marker), scaledSize: new google.maps.Size(40, 40) },
                optimized: false,
                label: { text: data.name + ', ' + data.desc, color: 'chocolate' }
            });
        }
    }

    goToMaps() {
        (window as any).open(mapsUrl + parseFloat(this.data.location_map.lati) + ',' + parseFloat(this.data.location_map.long), "_blank");
    }
}
