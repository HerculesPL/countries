import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryListResolver } from './countries/country-list/country-list-resolver';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

const routes: Routes = [         
  { 
      path: '', 
      component: CountryListComponent,
      resolve: {
          countries: CountryListResolver
      }
  },
    { 
        path: '**', 
        component: NotFoundComponent
    }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
