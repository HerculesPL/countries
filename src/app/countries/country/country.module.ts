import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CountryComponent } from './country.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CountryDetailModule } from '../country-detail/country-detail.module';
import { CountryDetailComponent } from '../country-detail/country-detail.component';




@NgModule({
    declarations: [CountryComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        RouterModule,
        CountryDetailModule
    ],
    exports: [ CountryComponent ],
    entryComponents: [ CountryDetailComponent ]
})

export class CountryModule {

}