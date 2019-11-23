/// <reference types="@types/googlemaps" />
import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
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


    constructor() { }
    ngOnInit() {
        // tslint:disable-next-line: prefer-const
        var mapProp = {
            center: new google.maps.LatLng(18.5793, 73.8143),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }
}
