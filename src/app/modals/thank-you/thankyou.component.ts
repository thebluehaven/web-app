import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-thankyou',
    templateUrl: './thankyou.component.html',
    styleUrls: ['./thankyou.component.css']
})

export class ThankyouComponent {
    @Input()
    data: any;

    @Output()
    public closePopup: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

    hidePop() {
        this.closePopup.emit();
    }
}
