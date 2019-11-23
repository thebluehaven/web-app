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
        { text: 'One', cols: 2, rows: 1, color: 'lightblue' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightcyan' },
        { text: 'Two', cols: 1, rows: 2, color: 'orange' },
        { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightyellow' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightcyan' },
        { text: 'Two', cols: 1, rows: 2, color: 'purple' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Three', cols: 1, rows: 1, color: 'red' },
        { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
        { text: 'Two', cols: 2, rows: 1, color: 'lightgray' },
        { text: 'Two', cols: 1, rows: 3, color: 'lightcyan' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    ];
}
