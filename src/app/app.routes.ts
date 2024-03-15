import { PanierModule } from './features/panier/panier.module';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cocktails',
    pathMatch: 'full',
  },
  {
    path: 'cocktails',
    loadChildren: () =>
      import('./features/cocktail/cocktail.module').then(
        (module) => module.CocktailModule
      ),
  },
  {
    path: 'panier',
    loadChildren: () =>
      import('./features/panier/panier.module').then(
        (module) => module.PanierModule
      ),
  },
];
