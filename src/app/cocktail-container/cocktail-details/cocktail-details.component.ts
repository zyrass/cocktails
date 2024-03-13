import { Cocktail } from '../../../shared/interfaces/cocktail.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PanierService } from '../../../shared/services/panier.service';
import { CocktailService } from '../../../shared/services/cocktail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {
  public cocktail!: Cocktail;

  public subscription: Subscription;

  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = this.cocktailService
        .getCocktail(+paramMap.get('index'))
        .subscribe((cocktail: Cocktail) => {
          this.cocktail = cocktail;
        });
    });
  }

  public addToPanier() {
    this.panierService.addPanier(this.cocktail.ingredients);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
