import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.fetchCocktails().subscribe();
  }
}
