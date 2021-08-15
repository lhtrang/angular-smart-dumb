import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoListPageStore } from './todo-list-page.store';
import { TodoItem } from '../../../shared/todo-item/todo-item';
import { selectNewTodo, selectSearch } from '../../../state/todo.selectors';
import { addNewTodo, deleteTodo, loadAllTodo, newTodoInput, saveTodo, searchTodo } from '../../../state/todo.actions';

/*
 * This is SUPPER SMART component & has STATE (SMART - STATEFUL)
 */
@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  providers: [
    TodoListPageStore,
  ]
})
export class TodoListPageComponent implements OnInit {
  newTodo$ = this.store.select(selectNewTodo);
  search$ = this.store.select(selectSearch);
  todoList$ = this.pageStore.todoList$;

  constructor(
    private store: Store,
    private pageStore: TodoListPageStore,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllTodo());
  }

  onAddNewTodo(): void {
    this.store.dispatch(addNewTodo());
  }

  onNewTodoInput(value: string): void {
    this.store.dispatch(newTodoInput({value}));
  }

  onEnableEditMode(todoId: string): void {
    this.pageStore.enableEditMode(todoId);
  }

  onCancelEdit(todoId: string): void {
    this.pageStore.cancelEdit(todoId);
  }

  onDraftInput(item: TodoItem): void {
    this.pageStore.updateDraftInput(item);
  }

  onDeleteTodo(todoId: string): void {
    this.store.dispatch(deleteTodo({id: todoId}));
  }

  onSaveTodo(item: TodoItem): void {
    this.store.dispatch(saveTodo({todoItem: item}));
  }

  onSearchInput(keyword: string): void {
    this.store.dispatch(searchTodo({keyword}));
  }
}
