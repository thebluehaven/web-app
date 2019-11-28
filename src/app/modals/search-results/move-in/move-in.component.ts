import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Contact } from 'src/app/CONSTANTS';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AbstractControl } from '@angular/forms'

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

    contactForm: FormGroup;
    contactDetails: Contact;
    submitted = false;
    times: Time[] = [
        { value: '9-11', viewValue: '9AM - 11AM' },
        { value: '11-1', viewValue: '11AM - 1PM' },
        { value: '1-3', viewValue: '1PM - 3PM' },
        { value: '3-5', viewValue: '3PM - 5PM' },
        { value: '5-7', viewValue: '5PM - 7PM' }
    ];

    matcher = new MyErrorStateMatcher();
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        // console.log(this.data);
        this.contactForm = this.formBuilder.group({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [
                Validators.required,
                Validators.email,
            ]),
            phone: new FormControl('', [Validators.required,
            this.phoneNumberValidator
            ]),
            date: new FormControl('', [Validators.required]),
            reqCallback: new FormControl(),
            query: new FormControl(),
            time: new FormControl('', [Validators.required]),
        });

        this.revert();
    }

    get f() { return this.contactForm.controls; }

    onSubmit() {

        this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }

        const controls = this.contactForm.controls;
        this.contactDetails = {
            firstName: controls.firstName.value,
            lastName: controls.lastName.value,
            email: controls.email.value,
            date: controls.date.value,
            time: controls.time.value,
            query: controls.query.value,
            reqCallback: controls.reqCallback.value,
            phone: controls.phone.value
        };
        this.revert();
        this.done.emit({ contact: this.contactDetails, type: 'step3' })
    }

    revert() {
        this.contactForm.reset();
    }

    phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
        const valid = /^\d+$/.test(control.value);
        return valid
            ? null
            : { invalidNumber: { valid: false, value: control.value } }
    }

}
