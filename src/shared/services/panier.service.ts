/**
 * @file Ce fichier contient le service PanierService pour gérer le panier d'ingrédients dans une application Angular.
 * @author Guillon Alain
 * @version 1.0.0
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';

/**
 * Service gérant le panier d'ingrédients.
 *
 * Le service utilise un BehaviorSubject pour stocker et émettre les ingrédients dans le panier.
 * Les composants ou autres services peuvent s'abonner à ce BehaviorSubject pour être informés des changements dans le panier.
 *
 * Le service fournit une méthode addPanier pour ajouter de nouveaux ingrédients au panier.
 * Cette méthode gère les cas où le panier est vide ou contient déjà des ingrédients.
 * Si le panier contient déjà des ingrédients, les quantités sont regroupées pour les ingrédients identiques.
 */
@Injectable({ providedIn: 'root' })
export class PanierService {
  /**
   * Observable contenant les ingrédients dans le panier.
   *
   * C'est un BehaviorSubject, ce qui signifie qu'il conserve la dernière valeur émise
   * et émet cette valeur aux nouveaux abonnés dès leur inscription.
   *
   * Le type de la valeur émise est Ingredient[] | null, ce qui signifie qu'elle peut être
   * soit un tableau d'ingrédients, soit null (dans le cas où le panier est vide).
   *
   * @type {BehaviorSubject<Ingredient[] | null>}
   */
  public ingredients$: BehaviorSubject<Ingredient[] | null> =
    new BehaviorSubject<Ingredient[] | null>(null);

  constructor() {}

  /**
   * Ajoute des ingrédients au panier.
   *
   * @param {Ingredient[]} ingredients - Les ingrédients à ajouter au panier.
   *
   * Si le panier est vide, les nouveaux ingrédients sont simplement ajoutés au panier.
   *
   * Si le panier contient déjà des ingrédients, les nouveaux ingrédients sont combinés avec les ingrédients existants.
   * Les quantités sont regroupées pour les ingrédients identiques.
   * Par exemple, si le panier contient déjà 2 pommes et que vous ajoutez 3 pommes, le panier contiendra 5 pommes.
   *
   * Après avoir combiné et regroupé les ingrédients, la nouvelle liste d'ingrédients est émise dans le BehaviorSubject ingredients$.
   * Tous les composants ou services abonnés à ingredients$ recevront la nouvelle liste d'ingrédients.
   */
  addPanier(ingredients: Ingredient[]): void {
    const currentValue = this.ingredients$.value;
    if (currentValue) {
      // Combine les ingrédients existants avec les nouveaux ingrédients
      // et regroupe les quantités pour les ingrédients identiques.
      const obj = [...currentValue, ...ingredients].reduce(
        (acc: { [x: string]: number }, value: Ingredient) => {
          if (acc[value.name]) {
            acc[value.name] += value.quantity;
          } else {
            acc[value.name] = value.quantity;
          }
          return acc;
        },
        {}
      );
      // Reconstruit le tableau d'ingrédients à partir de l'objet regroupé.
      const result = Object.keys(obj).map((key) => ({
        name: key,
        quantity: obj[key],
      }));
      this.ingredients$.next(result);
    } else {
      // Si le panier est vide, ajoute simplement les nouveaux ingrédients.
      this.ingredients$.next(ingredients);
    }
  }
}
