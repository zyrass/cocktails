import { Ingredient } from './../../../shared/interfaces/ingredient.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CocktailService } from '../../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
})
export class CocktailFormComponent {
  public cocktailForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: this.formBuilder.array([], Validators.required),
  });

  // GETTER permettant d'accéder au FormArray contenant les FormControl des ingrédients
  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public addIngredient(): void {
    this.ingredients.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }

  public submitForm(): void {
    console.log(this.cocktailForm);
    this.cocktailService.addCocktail(this.cocktailForm.value);
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
