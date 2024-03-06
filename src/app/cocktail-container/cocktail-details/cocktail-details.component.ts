import { Cocktail } from '../../../shared/interfaces/cocktail.interface';
import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../../shared/services/panier.service';
import { CocktailService } from '../../../shared/services/cocktail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail!: Cocktail;

  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const coctailIndex = paramMap.get('index');
      if (coctailIndex) {
        this.cocktail = this.cocktailService.getCocktail(+coctailIndex);
      }
    });
  }

  public addToPanier() {
    this.panierService.addPanier(this.cocktail.ingredients);
  }
}
