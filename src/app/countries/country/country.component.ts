import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Country } from './country';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CountryDetailComponent } from '../country-detail/country-detail.component';
import { CountryService } from './country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  
  country$: Observable<Country>;
  selectedCountry: string;

  constructor (
    private bottomSheet: MatBottomSheet,
    private countryService: CountryService
      ) {}

  openBottomSheet(selectedCountry: string) {
    this.selectedCountry = selectedCountry;
    let sheet = this.bottomSheet.open(CountryDetailComponent, {
      backdropClass: "my-backdrop",
      hasBackdrop: true,
      panelClass: 'bottom-sheet-container',
      data: selectedCountry
    });

    sheet.backdropClick().subscribe(() => {
      console.log("bd clicked")
    });
    
  }

  favorited(country: Country) {
    console.log(country.alpha3Code);
  }

  @Input() country: Country[] = [];

}