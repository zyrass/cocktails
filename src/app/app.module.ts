import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CocktailListComponent, CocktailDetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
