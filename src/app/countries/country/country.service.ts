import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';
import { map } from 'rxjs/operators';

const API = 'https://restcountries.eu/rest/v2';

@Injectable ({ providedIn: 'root'})

export class CountryService {

    constructor(private http: HttpClient) {
    }

    getAll<Country>(): Observable<Country> {
        return this.http.get<Country>(API + '/region/americas');
    }

    findByName(alpha3Code: string) {
        return this.http.get<Country>(API + '/alpha/' + alpha3Code);
    }

    favorite(alpha3Code: string) {
        return this.http.post(
            API + '/alpha/' + alpha3Code + '/favorited', {}, { observe: 'response'}
        )
        .pipe(map(res => true));
        
    }
}