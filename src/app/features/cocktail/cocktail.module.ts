import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { COCKTAIL_ROUTES } from './cocktail.routes';
import { SharedModule } from '../../shared/modules/shared/shared.module';

@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(COCKTAIL_ROUTES),
    SharedModule,
  ],
})
export class CocktailModule {}
