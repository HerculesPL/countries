import { Component, Input } from '@angular/core';

import { Country } from './country';
import { CountryDetailComponent } from '../country-detail/country-detail.component';

//angular material imports
import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  
  
  selectedCountry: string;

  icon = "star_outline"

  //function to receive emit output from favorite.component
  recieveIcon($event) {
    
    this.icon = $event;

  }

  constructor (
    private bottomSheet: MatBottomSheet
      ) {}

  //fuction from angular material to open bottom sheet passing alpha3Code to use it in the findByName method from countryService
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
  //receiving data from countries.component
  @Input() country: Country[] = [];

}