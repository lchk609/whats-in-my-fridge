import { Component } from '@angular/core';
import { AutoCompletePanelComponent } from './components/auto-complete-panel/auto-complete-panel.component';
import { Ingredient } from '../../types/home';
import { IngredientCardComponent } from './components/ingredient-card/ingredient-card.component';
import { SearchBarService } from './services/search-bar.service';

const MINIMUM_INGREDIENT_LENGTH = 3;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  imports: [AutoCompletePanelComponent, IngredientCardComponent]
})
export class HomeComponent {
  newIngredients : Ingredient[] = [{
    name: "poulet",
    id: 1
  },
  {
    name: "poule",
    id: 2
  },
  {
    name: "poulpe",
    id: 3
  }];

  handleChange(event : Event) {
    if ((event.target as HTMLInputElement).value.length < MINIMUM_INGREDIENT_LENGTH){
      this.searchBarService.setIngredientList([]);
    } else {
      this.searchBarService.setIngredientList(this.newIngredients);
    }
  }

  constructor(private searchBarService: SearchBarService){}
}
