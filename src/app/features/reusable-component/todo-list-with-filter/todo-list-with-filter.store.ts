import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';
import { TodoItem } from '../../../shared/todo-item/todo-item';
import { selectTodoList } from '../../../state/todo.selectors';

export interface TodoListWithFilterState {
  todoList: TodoItem[];
}

@Injectable()
export class TodoListWithFilterStore extends ComponentStore<TodoListWithFilterState> {
  constructor(
    private store: Store,
  ) {
    super({
      todoList: [],
    });

    store.select(selectTodoList).pipe(
      tap(todoList => this.patchState({todoList}))
    ).subscribe();
  }

  readonly todoList$: Observable<TodoItem[]> = this.select(state => state.todoList);
  readonly enableEditMode = this.updater((state, todoId: string) => {
    const todoList = state.todoList.slice();
    todoList.forEach(todoItem => {
      if (todoItem.id === todoId) {
        todoItem.isEditing = true;
      }
    });
    return {...state, todoList};
  });
  readonly cancelEdit = this.updater((state, todoId: string) => {
    const todoList = state.todoList.slice();
    todoList.forEach(todoItem => {
      if (todoItem.id === todoId) {
        todoItem.isEditing = false;
        todoItem.draft = todoItem.value;
      }
    });
    return {...state, todoList};
  });
  readonly updateDraftInput = this.updater((state, item: TodoItem) => {
    const todoList = state.todoList.slice();
    todoList.forEach(todoItem => {
      if (todoItem.id === item.id) {
        todoItem.draft = item.draft;
      }
    });
    return {...state, todoList};
  });
}
