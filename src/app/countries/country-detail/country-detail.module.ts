import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailComponent } from './country-detail.component';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule ({
    declarations: [CountryDetailComponent],
    exports: [ CountryDetailComponent],
    imports: [
        CommonModule,
        MatBottomSheetModule,
        MatListModule,
        MatIconModule
    ]
})

export class CountryDetailModule {
    
}