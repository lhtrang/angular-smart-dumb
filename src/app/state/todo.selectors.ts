import { createSelector } from '@ngrx/store';
import { TodoItem } from '../shared/todo-item/todo-item';

export const selectTodoState = state => state.todo;

export const selectTodoList = createSelector(
  selectTodoState,
  (todo) => todo.todos.map(item => ({
    isEditing: false,
    id: item.id,
    value: item.value,
    draft: item.value
  } as TodoItem))
);

export const selectNewTodo = createSelector(
  selectTodoState,
  (todo) => todo.newTodo
);

export const selectSearch = createSelector(
  selectTodoState,
  (todo) => todo.search
);
