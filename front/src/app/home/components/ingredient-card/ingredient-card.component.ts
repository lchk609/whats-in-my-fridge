import { Component } from '@angular/core';
import { Ingredient } from '../../../types/home';
import { SearchBarService } from '../../services/search-bar.service';

@Component({
  selector: 'ingredient-card',
  imports: [],
  templateUrl: './ingredient-card.component.html',
  styleUrl: './ingredient-card.component.less'
})
export class IngredientCardComponent {
  ingredientCards: Ingredient[] = [];

  handleClick(ingredientCard: Ingredient) {
    const index = this.ingredientCards.indexOf(ingredientCard);
    this.ingredientCards.splice(index, 1);
    this.searchBarService.removeIngredientCard(ingredientCard);
  }

  constructor(private searchBarService: SearchBarService) { 
    searchBarService.getIngredientCard().subscribe(data => {4
      this.ingredientCards.push(data)
    })
  }
}
