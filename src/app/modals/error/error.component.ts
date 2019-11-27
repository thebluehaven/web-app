import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})

export class ErrorComponent {
    @Input()
    data: any;

    @Output()
    public closePopup: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }
}
