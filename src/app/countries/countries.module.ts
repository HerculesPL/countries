import { NgModule } from '@angular/core';

import { CountryListModule } from './country-list/country-list.module';
import { CountryModule } from './country/country.module';

@NgModule({

    imports: [ 
        CountryModule,
        CountryListModule
        
    ]
})

export class CountriesModule {}
