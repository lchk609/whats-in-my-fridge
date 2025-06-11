import { Component, inject } from '@angular/core';
import { AutoCompletePanelComponent } from './components/auto-complete-panel/auto-complete-panel.component';
import { Ingredient } from '../types/home';
import { SearchBarService } from './services/search-bar.service';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeCard } from '../types/recipe-card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FilterModalComponent } from '../shared-components/filter-modal/filter-modal.component';

const MINIMUM_INGREDIENT_LENGTH = 3;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  imports: [AutoCompletePanelComponent, RecipeCardComponent, MatButtonModule, FilterModalComponent]
})
export class HomeComponent {
    readonly dialog = inject(MatDialog);

  newIngredients : Ingredient[] = [{
    name: "poulet",
    id: 1
  },
  {
    name: "poule",
    id: 2
  },
  {
    name: "poule",
    id: 2
  },
  {
    name: "poule",
    id: 2
  },
  {
    name: "poulpe",
    id: 3
  }];

  recipesOfTheDay: RecipeCard[] = [{
    id: 1,
    name: "broccoli frits",
    photoUrl: "https://assets.afcdn.com/recipe/20230630/143921_w600.jpg",
    recipeUrl: "https://www.marmiton.org/recettes/recette_tarte-aux-epinards_18992.aspx#d143921-p1",
    note: 4.3,
    noticeNumber: 219,
    difficulty: "Facile",
    duration: "40 min",
    cost: "Bon Marché"
  },
  {
    id: 1,
    name: "broccoli frits",
    photoUrl: "https://assets.afcdn.com/recipe/20230630/143921_w600.jpg",
    recipeUrl: "https://www.marmiton.org/recettes/recette_tarte-aux-epinards_18992.aspx#d143921-p1",
    note: 4.3,
    noticeNumber: 219,
    difficulty: "Moyenne",
    duration: "40 min",
    cost: "Bon Marché"
  },
  {
    id: 1,
    name: "broccoli frits",
    photoUrl: "https://assets.afcdn.com/recipe/20230630/143921_w600.jpg",
    recipeUrl: "https://www.marmiton.org/recettes/recette_tarte-aux-epinards_18992.aspx#d143921-p1",
    note: 4.3,
    noticeNumber: 219,
    difficulty: "Difficile",
    duration: "40 min",
    cost: "Bon Marché"
  },
  {
    id: 1,
    name: "broccoli frits",
    photoUrl: "https://assets.afcdn.com/recipe/20230630/143921_w600.jpg",
    recipeUrl: "https://www.marmiton.org/recettes/recette_tarte-aux-epinards_18992.aspx#d143921-p1",
    note: 4.3,
    noticeNumber: 219,
    difficulty: "Très Facile",
    duration: "40 min",
    cost: "Bon Marché"
  }];

  handleChange(event : Event) {
    if ((event.target as HTMLInputElement).value.length < MINIMUM_INGREDIENT_LENGTH){
      this.searchBarService.setIngredientList([]);
    } else {
      this.searchBarService.setIngredientList(this.newIngredients);
    }
  }

  filterClick() {
    const dialogRef = this.dialog.open(FilterModalComponent);
  }

  constructor(private searchBarService: SearchBarService){}
}
