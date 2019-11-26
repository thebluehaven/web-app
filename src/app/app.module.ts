import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// importing componentns
import { HomeComponent } from './home/home.component';
// importing sections
import { SectionOneComponent } from './sections/section-one/section-one.component';
import { SectionTwoComponent } from './sections/section-two/section-two.component';
import { SectionThreeComponent } from './sections/section-three/section-three.component';
import { SectionFourComponent } from './sections/section-four/section-four.component';
import { SectionFiveComponent } from './sections/section-five/section-five.component';
import { SectionSixComponent } from './sections/section-six/section-six.component';
import { SearchResultsComponent } from './modals/search-results/search-results.component';
import { GalleryModalComponent } from './modals/gallery-modal/gallery-modal.component';
import { LocationModalComponent } from './modals/location-modal/location-modal.component';
import { VideoModalComponent } from './modals/video-modal/video-modal.component';
import { PopupModalComponent } from './modals/popup-modal/popup-modal.component';
import { SearchResultsListComponent } from './modals/search-results/search-results-list/search-results-list.component';
import { CustomizeComponent } from './modals/search-results/customize/customize.component'

// angular material
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionSixComponent,
    SearchResultsComponent,
    GalleryModalComponent,
    LocationModalComponent,
    VideoModalComponent,
    PopupModalComponent,
    SearchResultsListComponent,
    CustomizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    // SearchResultsComponent,
    // GalleryModalComponent,
    // LocationModalComponent,
    // VideoModalComponent,
    PopupModalComponent
  ]
})
export class AppModule { }
