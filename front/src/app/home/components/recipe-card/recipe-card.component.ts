import { Component, Input, OnInit } from '@angular/core';
import { RecipeCard } from '../../../types/recipe-card';

@Component({
  selector: 'recipe-card',
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.less'
})
export class RecipeCardComponent implements OnInit {
  @Input() recipeCard!: RecipeCard;
  difficultyClass = ""
  
  ngOnInit(): void {
    switch(this.recipeCard.difficulty) {
      case "Difficile":
        this.difficultyClass = "hard";
        break;
      case "Moyenne":
        this.difficultyClass = "medium";
        break;
      case "Facile":
        this.difficultyClass = "easy";
        break;
      case "Très Facile":
        this.difficultyClass = "very-easy";
        break;
      default:
        this.difficultyClass = "medium";
    }
  }
}
