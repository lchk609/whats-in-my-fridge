import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ingredient } from '../../../../types/home';
import { SearchBarService } from '../../services/search-bar.service';

@Component({
  selector: 'auto-complete-panel',
  imports: [CommonModule],
  templateUrl: './auto-complete-panel.component.html',
  styleUrl: './auto-complete-panel.component.less'
})

export class AutoCompletePanelComponent {
  newIngredients: Ingredient[] = []

  handleClick(ingredient: Ingredient) {
    this.searchBarService.setIngredientCard(ingredient)
    const index = this.newIngredients.indexOf(ingredient);
    this.newIngredients.splice(index, 1);
  }

  constructor(private searchBarService : SearchBarService) {
    searchBarService.getIngredientList().subscribe(ingredients => {
      this.newIngredients = ingredients;
    })
    searchBarService.restoreIngredientInList().subscribe(ingredient => {
      this.newIngredients.push(ingredient);
    })
  }
}
