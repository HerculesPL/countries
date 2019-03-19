import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryListResolver } from './countries/country-list/country-list-resolver';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';

const routes: Routes = [         
  { 
      path: '', 
      component: CountryListComponent,
      resolve: {
          countries: CountryListResolver
      }
  },
  { 
    path: 'c/:countryAlpha3Code', 
    component: CountryDetailComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
