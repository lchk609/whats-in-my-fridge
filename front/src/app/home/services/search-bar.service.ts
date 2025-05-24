import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ingredient } from '../../../types/home';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  private ingredientCard = new Subject<Ingredient>();
  private ingredientList = new Subject<Ingredient[]>();
  private restoreIngredient = new Subject<Ingredient>();

  setIngredientList(ingredientList: Ingredient[]) {
    this.ingredientList.next(ingredientList);
  }

  getIngredientList(): Observable<Ingredient[]> {
    return this.ingredientList.asObservable();
  }

  setIngredientCard(ingredient: Ingredient) {
    this.ingredientCard.next(ingredient);
  }

  getIngredientCard(): Observable<Ingredient> {
    return this.ingredientCard.asObservable();
  }

  removeIngredientCard(ingredient: Ingredient) {
    this.restoreIngredient.next(ingredient);
  }

  restoreIngredientInList(): Observable<Ingredient> {
    return this.restoreIngredient.asObservable();
  }

  constructor() { }
}
