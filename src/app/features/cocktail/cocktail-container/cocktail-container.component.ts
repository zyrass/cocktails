import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cocktail } from '../../../shared/interfaces/cocktail.interface';
import { CocktailService } from '../../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  public cocktail$: Observable<Cocktail[]> = this.cocktailService.cocktails$;

  // public cocktails: Cocktail[] = [];
  // public subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    // this.subscription.add(
    //   this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
    //     this.cocktails = cocktails;
    //   })
    // );
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
