import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
export interface Image {
    name: string;
    image_url: number;
}

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery-modal.component.html',
    styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {
    @Input()
    data: any;

    constructor(private appService: ServicesService) { }
    images: Image[];

    ngOnInit() {
        this.getImages(this.data.building_id);
    }

    getImages(id: string) {
        this.appService.getImagesByBuildingId(id)
            .subscribe(images => this.images = [...images]);
    }
}
