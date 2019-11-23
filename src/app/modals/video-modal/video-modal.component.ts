import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
    selector: 'app-video',
    templateUrl: './video-modal.component.html',
    styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent implements OnInit{
    @Input()
    public data: any;

    url: any;

    constructor(private sanitizer: DomSanitizer) { }

    // sanitizeURL(url: string) {
    //     return 
    // }

    ngOnInit() {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.video);
    }
}
