import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;

export interface Building {
    name: string;
    flats: string;
    price: string;
    location: string;
    deposit: string;
    video: string;
    hover: boolean;
}

@Component({
    selector: 'app-section-three',
    templateUrl: './section-three.component.html',
    styleUrls: ['./section-three.component.css']
})
export class SectionThreeComponent implements OnInit {
    buildings: Building[] = [
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: 'https://www.youtube.com/embed/eKBDBCnxadQ',
            hover: false
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: '',
            hover: false
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: '',
            hover: false
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: '',
            hover: false
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: '',
            hover: false
        },
        {
            name: 'BH-HLK-AMBER',
            flats: '1 BHK | 2 BHK | 1 RK',
            price: '8500',
            location: 'Halanayakanahalli, Sarjapur Rd.',
            deposit: '40k',
            video: '',
            hover: false
        }
    ];

    constructor() {
    }

    ngOnInit() {
        $('#myCarousel').carousel({
            interval: 1000
        });

        // tslint:disable-next-line: only-arrow-functions
        $('#carousel-example').on('slide.bs.carousel', function(e) {
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
}
