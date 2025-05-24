import { Component, EventEmitter, Output } from '@angular/core';
import { AutoCompletePanelComponent } from './components/auto-complete-panel/auto-complete-panel.component';
import { Ingredients } from '../../types/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  imports: [AutoCompletePanelComponent]
})
export class HomeComponent {
  newIngredients : Ingredients[] = [];

  handleChange(event : Event) {
    if((event.target as HTMLInputElement).value === ''){
      this.newIngredients = [];
    } else {
      const newId = Math.floor(Math.random() * 1000);
      this.newIngredients = [{name: (event.target as HTMLInputElement).value, id: newId}];
    }
  }
}
