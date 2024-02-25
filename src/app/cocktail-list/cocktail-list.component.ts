import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [
    {
      _id: crypto.randomUUID(),
      name: 'Cocktail Gin Tonic',
      img: 'https://www.cocktailmag.fr/media/k2/items/cache/4d8c9898b5bb88437f053c8b957f47f3_M.jpg',
      description:
        'Gin Tonic : un cocktail autrefois utilisé pour combattre le scorbut et la malaria !',
    },
    {
      _id: crypto.randomUUID(),
      name: 'Cocktail Paradise',
      img: 'https://www.cocktailmag.fr/media/k2/items/cache/d48ed900e79fa9547169c26138b4cd8d_M.jpg',
      description:
        'Le cocktail Paradise : un short drink fruité à siroter idéalement en apéritif.',
    },
    {
      _id: crypto.randomUUID(),
      name: 'Cocktail Pussyfoot',
      img: 'https://www.cocktailmag.fr/media/k2/items/cache/938a195f8810cb9b31c6503221891897_M.jpg',
      description:
        'Le Pussyfoot : un cocktail classique en hommage à un militant du sans-alcool.',
    },
  ];
}
