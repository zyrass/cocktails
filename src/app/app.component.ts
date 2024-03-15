import { Component, OnInit } from '@angular/core';
import { CocktailService } from './shared/services/cocktail.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.fetchCocktails().subscribe();
    console.log({
      environment: {
        key: environment.apiKey,
        url: environment.apiUrl,
      },
    });
  }
}
