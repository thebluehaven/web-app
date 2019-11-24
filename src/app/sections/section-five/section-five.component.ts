import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';
import { Testimonial } from 'src/app/CONSTANTS';
import { ServicesService } from 'src/app/services.service';

@Component({
    selector: 'app-section-five',
    templateUrl: './section-five.component.html',
    styleUrls: ['./section-five.component.scss'],
})
export class SectionFiveComponent implements OnInit{
    testimonials: Testimonial[] = [];
    constructor(private appService: ServicesService) { }

    getTestimonials(): void {
        this.appService.getTestimonials()
        .subscribe(testimonial => this.testimonials = [...testimonial])
    }

    ngOnInit() {
        this.getTestimonials();
    }
}
