import { createAction, props } from '@ngrx/store';
import { Todo } from '../shared/todo';
import { TodoItem } from '../shared/todo-item/todo-item';

export const loadAllTodo = createAction(
  'Load All TODO'
);

export const loadAllTodoSuccess = createAction(
  'Load All TODO Success',
  props<{ todos: Todo[] }>()
);

export const newTodoInput = createAction(
  'New TODO input',
  props<{ value: string }>()
);

export const addNewTodo = createAction(
  'Add new TODO'
);

export const addNewTodoSuccess = createAction(
  'Add new TODO Success',
  props<{ newTodo: Todo }>()
);

export const deleteTodo = createAction(
  'Delete TODO',
  props<{id: string}>()
);

export const deleteTodoSuccess = createAction(
  'Delete TODO success',
  props<{id: string}>()
);

export const saveTodo = createAction(
  'Save TODO',
  props<{todoItem: TodoItem}>()
);

export const saveTodoSuccess = createAction(
  'Save TODO success',
  props<{todo: Todo}>()
);

export const searchTodo = createAction(
  'Search TODO',
  props<{keyword: string}>()
);

export const searchTodoSuccess = createAction(
  'Search TODO success',
  props<{todos: Todo[]}>()
);
