import { Injectable } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';
import { BehaviorSubject, Observable, filter, first, map, tap } from 'rxjs';
import { EIngredient } from '../interfaces/EIngredient.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  // private cocktailData: Cocktail[] = [];
  public cocktails$: BehaviorSubject<Cocktail[] | []> = new BehaviorSubject<
    Cocktail[] | []
  >([]);

  constructor(private http: HttpClient) {
    this.seed();
  }

  public seed() {
    this.http
      .get<Cocktail[] | []>('https://restapi.fr/api/zyrass-cocktails')
      .subscribe((cocktails: Cocktail[] | []) => {
        if (!cocktails.length) {
          this.http
            .post('https://restapi.fr/api/zyrass-cocktails', [
              {
                name: 'Cocktail Gin Tonic',
                img: 'https://www.cocktailmag.fr/media/k2/items/cache/4d8c9898b5bb88437f053c8b957f47f3_M.jpg',
                description:
                  'Gin Tonic : un cocktail autrefois utilisé pour combattre le scorbut et la malaria !',
                ingredients: [
                  {
                    name: 'gin',
                    quantity: 5,
                    mesure: EIngredient.CL,
                  },
                  {
                    name: 'schweppes',
                    quantity: 10,
                    mesure: EIngredient.CL,
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
                    mesure: EIngredient.CL,
                  },
                  {
                    name: "liqueur d'abricot",
                    quantity: 2,
                    mesure: EIngredient.CL,
                  },
                  {
                    name: "jus d'orange",
                    quantity: 1,
                    mesure: EIngredient.CL,
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
                    mesure: EIngredient.CL,
                  },
                  {
                    name: 'jus de citron pressé',
                    quantity: 3,
                    mesure: EIngredient.CL,
                  },
                  {
                    name: "jaune d'oeuf",
                    quantity: 1,
                    mesure: EIngredient.QT,
                  },
                  {
                    name: 'sirop de grenadine',
                    quantity: 1.5,
                    mesure: EIngredient.CL,
                  },
                ],
              },
            ])
            .subscribe();
        }
      });
  }

  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null),
      // first(),
      map((cocktails: Cocktail[]) => {
        return cocktails[index];
      })
    );
  }

  public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http
      .post<Cocktail>('https://restapi.fr/api/zyrass-cocktails', cocktail)
      .pipe(
        tap((savedCocktail: Cocktail) => {
          const values = this.cocktails$.value;
          this.cocktails$.next([...values, savedCocktail]);
        })
      );
  }

  public editCocktail(
    cocktailID: string,
    editedCocktail: Cocktail
  ): Observable<Cocktail> {
    return this.http
      .patch<Cocktail>(
        `https://restapi.fr/api/zyrass-cocktails/${cocktailID}`,
        editedCocktail
      )
      .pipe(
        tap((savedCocktail: Cocktail) => {
          const values = this.cocktails$.value;
          this.cocktails$.next(
            values.map((cocktail: Cocktail) => {
              if (cocktail.name === savedCocktail.name) {
                return savedCocktail;
              } else {
                return cocktail;
              }
            })
          );
        })
      );
  }

  public fetchCocktails(): Observable<Cocktail[]> {
    return this.http.get('https://restapi.fr/api/zyrass-cocktails').pipe(
      tap((cocktails: Cocktail[]) => {
        this.cocktails$.next(cocktails);
      })
    );
  }
}
