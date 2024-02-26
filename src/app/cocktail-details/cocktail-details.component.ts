import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    _id: crypto.randomUUID(),
    name: 'Cocktail Paradise',
    img: 'https://www.cocktailmag.fr/media/k2/items/cache/d48ed900e79fa9547169c26138b4cd8d_M.jpg',
    description:
      'Le cocktail Paradise : un short drink fruité à siroter idéalement en apéritif.',
  };
}
