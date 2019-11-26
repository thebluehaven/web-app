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
    public goForward: EventEmitter<BuildingObject> = new EventEmitter<BuildingObject>();
    constructor() {}

    ngOnInit() {
        // console.log(this.data);
    }
}
