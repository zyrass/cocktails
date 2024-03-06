import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { SelectedDirective } from '../shared/directives/selected.directive';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    CocktailEditComponent,
    PanierContainerComponent,
    IngredientListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
