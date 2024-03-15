import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SelectedDirective } from '../../directives/selected.directive';

@NgModule({
  declarations: [SelectedDirective, FilterPipe],
  imports: [CommonModule],
  exports: [CommonModule, SelectedDirective, FilterPipe],
})
export class SharedModule {}
