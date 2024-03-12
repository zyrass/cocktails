import { Injectable } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Cocktail Gin Tonic',
      img: 'https://www.cocktailmag.fr/media/k2/items/cache/4d8c9898b5bb88437f053c8b957f47f3_M.jpg',
      description:
        'Gin Tonic : un cocktail autrefois utilisé pour combattre le scorbut et la malaria !',
      ingredients: [
        {
          name: 'gin',
          quantity: 5,
        },
        {
          name: 'schweppes',
          quantity: 10,
        },
      ],
    },
    {
      name: 'Cocktail Paradise',
      img: 'https://www.cocktailmag.fr/media/k2/items/cache/d48ed900e79fa9547169c26138b4cd8d_M.jpg',
      description:
        'Le cocktail Paradise : un short drink fruité à siroter idéalement en apéritif.',
      ingredients: [
        {
          name: 'gin',
          quantity: 4,
        },
        {
          name: "liqueur d'abricot",
          quantity: 2,
        },
        {
          name: "jus d'orange",
          quantity: 1,
        },
      ],
    },
    {
      name: 'Cocktail Pussyfoot',
      img: 'https://www.cocktailmag.fr/media/k2/items/cache/938a195f8810cb9b31c6503221891897_M.jpg',
      description:
        'Le Pussyfoot : un cocktail classique en hommage à un militant du sans-alcool.',
      ingredients: [
        {
          name: "jus d'orange",
          quantity: 10,
        },
        {
          name: 'jus de citron pressé',
          quantity: 3,
        },
        {
          name: "jaune d'oeuf",
          quantity: 1,
        },
        {
          name: 'sirop de grenadine',
          quantity: 1.5,
        },
      ],
    },
  ]);

  public getCocktail(index: number) {
    return this.cocktails$.value[index];
  }

  public addCocktail(cocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next([...value, cocktail]);
  }
}
