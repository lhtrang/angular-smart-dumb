import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoListWithFilterStore } from './todo-list-with-filter.store';
import { TodoItem } from '../../../shared/todo-item/todo-item';
import { deleteTodo, loadAllTodo, saveTodo, searchTodo } from '../../../state/todo.actions';
import { selectSearch } from '../../../state/todo.selectors';

/*
 * This is SMART & STATEFUL component
 */
@Component({
  selector: 'app-todo-list-with-filter',
  templateUrl: './todo-list-with-filter.component.html',
  providers: [
    TodoListWithFilterStore
  ]
})
export class TodoListWithFilterComponent implements OnInit {
  search$ = this.store.select(selectSearch);
  todoList$ = this.componentStore.todoList$;

  constructor(
    private store: Store,
    private componentStore: TodoListWithFilterStore,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllTodo());
  }

  onSearchInput(event): void {
    const keyword: string = event.target.value;
    this.store.dispatch(searchTodo({keyword}));
  }

  onSaveTodo(item: TodoItem): void {
    this.store.dispatch(saveTodo({todoItem: item}));
  }

  onDeleteTodo(todoId: string): void {
    this.store.dispatch(deleteTodo({id: todoId}));
  }

  onDraftInput(item: TodoItem): void {
    this.componentStore.updateDraftInput(item);
  }

  onEnableEditMode(todoId: string): void {
    this.componentStore.enableEditMode(todoId);
  }

  onCancelEdit(todoId: string): void {
    this.componentStore.cancelEdit(todoId);
  }
}
