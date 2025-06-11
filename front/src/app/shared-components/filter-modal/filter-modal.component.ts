import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-modal',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.less'
})
export class FilterModalComponent {
    readonly dialogRef = inject(MatDialogRef<FilterModalComponent>);
}
