import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from './country';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CountryDetailComponent } from '../country-detail/country-detail.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  
  selectedCountry: string;
  favoritedCountry: boolean;

  constructor (
    private bottomSheet: MatBottomSheet
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

  favoriteButton(favoritedCountry: boolean) {
    console.log(this.favoritedCountry);
    if (!favoritedCountry) {
      this.favoritedCountry = true;

    } else {
      this.favoritedCountry = false;
    }
  }


  @Input() country: Country[] = [];

}