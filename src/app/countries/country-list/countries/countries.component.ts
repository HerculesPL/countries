import { Component, Input } from '@angular/core';

import { Country } from '../../country/country';

@Component ({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss']
})

export class CountriesComponent{
    
    //receiving data from country-list.component
    @Input() countries: Country[] = [];
  
    constructor() { }
    
}