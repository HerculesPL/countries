import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import { CountryService } from '../country/country.service';
import { Country } from '../country/country';

@Injectable ({
    providedIn: 'root'
})
export class CountryListResolver implements Resolve<Observable<Country[]>>{

    constructor (private service: CountryService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country[]>{
        return this.service.getAll();
    }
}