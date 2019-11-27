import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Contact } from 'src/app/CONSTANTS';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export interface Time {
    value: string;
    viewValue: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
@Component({
    selector: 'app-movein',
    templateUrl: './move-in.component.html',
    styleUrls: ['./move-in.component.css']
})

export class MoveinComponent implements OnInit {
    @Input()
    public data: any;
    @Output()
    public done: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public goBack: EventEmitter<any> = new EventEmitter<any>();

    contactDetails: Contact;

    times: Time[] = [
        { value: '9-11', viewValue: '9AM - 11AM' },
        { value: '11-1', viewValue: '11AM - 1PM' },
        { value: '1-3', viewValue: '1PM - 3PM' },
        { value: '3-5', viewValue: '3PM - 5PM' },
        { value: '5-7', viewValue: '5PM - 7PM' }
    ];

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();
    constructor() {
    }

    ngOnInit() {
        console.log(this.data);
    }


}
