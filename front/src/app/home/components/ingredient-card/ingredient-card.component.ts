import { Component } from '@angular/core';
import { Ingredient } from '../../../../types/home';
import { SearchBarService } from '../../services/search-bar.service';

@Component({
  selector: 'ingredient-card',
  imports: [],
  templateUrl: './ingredient-card.component.html',
  styleUrl: './ingredient-card.component.less'
})
export class IngredientCardComponent {
  ingredientCards: Ingredient[] = [];

  handleClick(ingredientCard) {
    
  }

  constructor(private searchBarService: SearchBarService) { 
    searchBarService.getIngredientCard().subscribe(data => {4
      this.ingredientCards.push(data)
    })
  }
}
