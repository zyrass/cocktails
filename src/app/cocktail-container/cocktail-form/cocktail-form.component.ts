import { Ingredient } from './../../../shared/interfaces/ingredient.interface';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CocktailService } from '../../../shared/services/cocktail.service';
import { Cocktail } from '../../../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
})
export class CocktailFormComponent implements OnInit {
  public cocktail?: Cocktail;
  public cocktailForm: FormGroup = this.initForm();

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

  ngOnInit(): void {
    console.log(
      this.cocktailForm.statusChanges.subscribe((value) => {
        console.log(value);
      })
    );

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this.cocktail = this.cocktailService.getCocktail(+index);
        this.cocktailForm = this.initForm(this.cocktail);
      }
    });
  }

  private initForm(
    cocktail: Cocktail = {
      name: '',
      img: '',
      description: '',
      ingredients: [],
    }
  ): FormGroup {
    return this.formBuilder.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.formBuilder.array(
        cocktail.ingredients.map((currentIngredient: Ingredient) => {
          return this.formBuilder.group({
            name: [currentIngredient.name, Validators.required],
            quantity: [currentIngredient.quantity, Validators.required],
            mesure: [currentIngredient.mesure, Validators.required],
          });
        }),
        Validators.required
      ),
    });
  }

  public addIngredient(): void {
    this.ingredients.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
        mesure: ['', Validators.pattern('^(cl|ml|g|qt)1$')],
      })
    );
  }

  public submitForm(): void {
    if (this.cocktail) {
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
