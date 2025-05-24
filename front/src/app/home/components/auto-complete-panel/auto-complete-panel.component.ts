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

  handleClick() {
    console.log("button clicked");
  }
}
