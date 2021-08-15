import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import {
  addNewTodo,
  addNewTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  loadAllTodo,
  loadAllTodoSuccess,
  saveTodo,
  saveTodoSuccess, searchTodo, searchTodoSuccess
} from './todo.actions';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectNewTodo } from './todo.selectors';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Injectable()
export class TodoEffects {
  loadAllTodo$ = createEffect(() => this.action$.pipe(
    ofType(loadAllTodo),
    switchMap(action => this.todoService.fetchTodos()),
    switchMap((todos: Todo[]) => [
      loadAllTodoSuccess({todos})
    ])
  ));

  addTodo$ = createEffect(() => this.action$.pipe(
    ofType(addNewTodo),
    concatLatestFrom(action => this.store.select(selectNewTodo)),
    switchMap(([action, newTodo]) => this.todoService.addTodo(newTodo)),
    switchMap(todo => [
      addNewTodoSuccess({newTodo: todo})
    ])
  ));

  deleteTodo$ = createEffect(() => this.action$.pipe(
    ofType(deleteTodo),
    tap(action => this.todoService.deleteTodo(action.id)),
    switchMap(action => [
      deleteTodoSuccess({id: action.id})
    ])
  ));

  saveTodo$ = createEffect(() => this.action$.pipe(
    ofType(saveTodo),
    tap(action => {
      this.todoService.updateTodo({
        id: action.todoItem.id,
        value: action.todoItem.draft
      } as Todo);
    }),
    switchMap(action => [
      saveTodoSuccess({
        todo: {
          id: action.todoItem.id,
          value: action.todoItem.draft
        } as Todo
      })
    ])
  ));

  searchTodo$ = createEffect(() => this.action$.pipe(
    ofType(searchTodo),
    debounceTime(300),
    switchMap(action => this.todoService.fetchTodos(action.keyword)),
    switchMap(todos => [
      searchTodoSuccess({todos})
    ])
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private todoService: TodoService,
  ) {
  }
}
