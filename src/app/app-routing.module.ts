import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import path from 'path';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cocktails',
    pathMatch: 'full',
  },
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      { path: ':index', component: CocktailDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
      { path: '**', redirectTo: '0' },
    ],
  },
  {
    path: 'panier',
    component: PanierContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
