import { Component, Input } from '@angular/core';
export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery-modal.component.html',
    styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent {
    @Input()
    data: any;

    constructor() { }
    tiles: Tile[] = [
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
    ];
}
