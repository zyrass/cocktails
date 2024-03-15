import { Cocktail } from './../interfaces/cocktail.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(cocktails: Cocktail[] | null, search: string): Cocktail[] | null {
    return cocktails
      ? cocktails.filter((currentCocktail: Cocktail) => {
          currentCocktail.name.toLowerCase().includes(search.toLowerCase());
        })
      : null;
  }
}
