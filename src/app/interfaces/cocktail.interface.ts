import { UUID } from 'crypto';

export interface Cocktail {
  _id?: UUID;
  name: string;
  img: string;
  description: string;
}
