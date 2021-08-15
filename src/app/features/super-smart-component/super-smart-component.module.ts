import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoListWithFilterComponent } from './todo-list-with-filter/todo-list-with-filter.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TodoListPageComponent,
    NewTodoComponent,
    TodoListWithFilterComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoListPageComponent
      }
    ]), CommonModule],
exports: [RouterModule]
})
export class SuperSmartComponentModule {
}
