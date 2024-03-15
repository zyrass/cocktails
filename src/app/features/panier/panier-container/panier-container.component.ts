import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../../shared/interfaces/ingredient.interface';
import { PanierService } from '../../../shared/services/panier.service';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] | null = null;
  public subscription: Subscription = new Subscription();

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.panierService.ingredients$.subscribe(
        (currentIngredients: Ingredient[] | null) =>
          (this.ingredients = currentIngredients)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
