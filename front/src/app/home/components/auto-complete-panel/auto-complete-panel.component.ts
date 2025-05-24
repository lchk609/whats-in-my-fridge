import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ingredients } from '../../../../types/home';

@Component({
  selector: 'auto-complete-panel',
  imports: [CommonModule],
  templateUrl: './auto-complete-panel.component.html',
  styleUrl: './auto-complete-panel.component.less'
})

export class AutoCompletePanelComponent {
  @Input() newIngredients : Ingredients[] = [];

  // onAddIngredients(ingredients: Ingredients[]) {
  //   this.ingredients.push(...ingredients);
  //   console.log("Nouvel ingrédient ajouté :", this.ingredients);
  // }

  handleClick() {
    console.log("button clicked");
  }
}
