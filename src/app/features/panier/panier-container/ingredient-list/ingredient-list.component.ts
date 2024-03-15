import { Component, Input } from '@angular/core';
import { Ingredient } from '../../../../shared/interfaces/ingredient.interface';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
})
export class IngredientListComponent {
  @Input() public ingredients: Ingredient[] | null = null;
}
