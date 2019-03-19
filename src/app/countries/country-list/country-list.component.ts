import { Component, OnInit } from '@angular/core';
import { Country } from '../country/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[] = [];
  filter: string = ''

  constructor(private activatedRoute: ActivatedRoute) {
  
  }
  ngOnInit(): void {
    this.countries = this.activatedRoute.snapshot.data['countries'];
  }

}
