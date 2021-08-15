import { NgModule } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { ListWithFilterComponent } from './list-with-filter/list-with-filter.component';
import { ItemTemplateDirective } from './item-template.directive';

@NgModule({
  declarations: [
    TodoItemComponent,
    ListWithFilterComponent,
    ItemTemplateDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoItemComponent,
    ListWithFilterComponent,
    ItemTemplateDirective,
  ]
})
export class SharedModule {
}
