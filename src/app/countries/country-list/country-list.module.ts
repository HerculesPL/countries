import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CountryListComponent } from './country-list.component';
import { CountryModule } from '../country/country.module';
import { CountriesComponent } from './countries/countries.component';
import { SearchComponent } from './search/search.component';
import { FilterByName } from './filter-by-name.pipe';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
    declarations: [
        CountryListComponent,
        CountriesComponent,
        SearchComponent,
        FilterByName
    ],
    imports: [ 
        CommonModule,
        CountryModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule,
        MatIconModule,
        MatToolbarModule
    ],
    exports: [
        CountryListComponent,
        SearchComponent
    ]
    
})
export class CountryListModule {}