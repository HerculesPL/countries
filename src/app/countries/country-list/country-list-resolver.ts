import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';


import { CountryService } from '../country/country.service';
import { Country } from '../country/country';

@Injectable ({
    providedIn: 'root'
})
export class CountryListResolver implements Resolve<Observable<Country[]>>{

    constructor (private service: CountryService) {}

    //resolver to get countries before the page is loaded
    resolve(): Observable<Country[]>{
        return this.service.getAll();
    }
}