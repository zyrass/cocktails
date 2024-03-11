import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
})
export class CocktailFormComponent {
  public cocktailForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  public submitForm(): void {
    console.log(this.cocktailForm);
  }
}
