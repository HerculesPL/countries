import { Component, OnInit, Inject } from '@angular/core';

import { CountryService } from '../country/country.service';
import { Country } from '../country/country';
import { MatBottomSheetRef ,MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country: Country;

  //inject bottomSheet from angular material
  constructor(
    private countryService: CountryService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<CountryDetailComponent>) { }

  //get country through alpha3Code using countryService
  ngOnInit() {
    const alpha3Code = this.data;
    this.countryService
    .findByName(alpha3Code)
    .subscribe(country => this.country = country);
  }
  //dismiss bottomsheet
  myAction(str) {
    this.bottomSheetRef.dismiss(str)
  }

}
