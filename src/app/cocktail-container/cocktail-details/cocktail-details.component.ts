import { Cocktail } from './../../interfaces/cocktail.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
})
export class CocktailDetailsComponent {
  @Input() public cocktail!: Cocktail;
}
