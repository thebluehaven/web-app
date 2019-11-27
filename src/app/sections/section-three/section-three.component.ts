import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BuildingObject } from 'src/app/CONSTANTS';
import { ServicesService } from 'src/app/services.service';
// import * as $ from 'jquery';
declare var $: any;

@Component({
    selector: 'app-section-three',
    templateUrl: './section-three.component.html',
    styleUrls: ['./section-three.component.css'],
})
export class SectionThreeComponent implements OnInit {
    buildings: BuildingObject[];

    constructor(private appService: ServicesService) {
    }

    ngOnInit() {
        this.getBuildings();
        $('#myCarousel').carousel({
            interval: 1000
        });

        // tslint:disable-next-line: only-arrow-functions
        $('#carousel-example').on('slide.bs.carousel', function (e) {
            const $e = $(e.relatedTarget);
            const idx = $e.index();
            const itemsPerSlide = 4;
            const totalItems = $('.carousel-item-list').length;

            if (idx >= totalItems - (itemsPerSlide - 1)) {
                const it = itemsPerSlide - (totalItems - idx);
                for (let i = 0; i < it; i++) {
                    // append slides to end
                    if (e.direction === 'left') {
                        $('.carousel-item-list').eq(i).appendTo('.carousel-inner-list');
                    } else {
                        $('.carousel-item-list').eq(0).appendTo('.carousel-inner-list');
                    }
                }
            }
        });
    }

    getBuildings(): void {

        this.appService.getBuildings()
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
