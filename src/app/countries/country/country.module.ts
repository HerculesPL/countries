import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//imports from countries app
import { CountryComponent } from './country.component';
import { CountryDetailModule } from '../country-detail/country-detail.module';
import { CountryDetailComponent } from '../country-detail/country-detail.component';
import { FavoriteComponent } from './favorite/favorite.component';

//angular material imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
    declarations: [
        CountryComponent,
        FavoriteComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        RouterModule,
        CountryDetailModule,
        MatIconModule
    ],
    exports: [ CountryComponent ],
    entryComponents: [ CountryDetailComponent ]
})

export class CountryModule {

}