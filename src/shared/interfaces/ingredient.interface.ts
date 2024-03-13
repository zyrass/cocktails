import { EIngredient } from './EIngredient.enum';

export interface Ingredient {
  name: string;
  quantity: number;
  mesure: EIngredient;
}
