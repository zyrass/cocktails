import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cocktail } from '../../../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
})
export class CocktailListComponent {
  @Input() public cocktails?: Cocktail[];
  @Input() public selectedCocktail!: Cocktail;
  @Output() private cocktailSelectionner: EventEmitter<number> =
    new EventEmitter();

  public cocktailSelected(index: number): void {
    this.cocktailSelectionner.emit(index);
  }
}
