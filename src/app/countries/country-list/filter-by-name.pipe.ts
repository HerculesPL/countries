import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../country/country';

@Pipe ({
    name: 'filterByName'
})

export class FilterByName implements PipeTransform{

    //filtering by countries name
    transform(countries: Country[], nameQuery: string) {
        nameQuery = nameQuery
            .trim()
            .toLowerCase();
            
            if(nameQuery) {
                return countries.filter(country => 
                    country.name.toLowerCase().includes(nameQuery)
                    );
            } else {
                return countries;
            }
    }
}