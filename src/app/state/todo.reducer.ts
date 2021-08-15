import { createReducer, on } from '@ngrx/store';
import {
  addNewTodoSuccess,
  deleteTodoSuccess,
  loadAllTodo,
  loadAllTodoSuccess,
  newTodoInput,
  saveTodo,
  saveTodoSuccess, searchTodoSuccess
} from './todo.actions';
import { Todo } from '../shared/todo';

export interface AppState {
  newTodo: string;
  search: string;
  todos: Todo[];
}

export const initialState = {
  newTodo: '',
  search: '',
  todos: [] as Todo[]
} as AppState;

export const todoReducer = createReducer(
  initialState,
  on(
    loadAllTodo,
    saveTodo,
    state => state || initialState
  ),
  on(
    loadAllTodoSuccess,
    searchTodoSuccess,
    (state, {todos}) => ({...state, todos})
  ),
  on(
    newTodoInput,
    (state, {value}) => ({...state, newTodo: value})
  ),
  on(
    addNewTodoSuccess,
    (state, {newTodo}) => {
      const todos = state.todos.slice();
      todos.push(newTodo);
      return {
        ...state,
        newTodo: '',
        todos
      };
    }
  ),
  on(
    deleteTodoSuccess,
    (state, {id}) => {
      const todos = state.todos;
      return {...state, todos: todos.filter(todo => todo.id !== id)};
    }
  ),
  on(
    saveTodoSuccess,
    (state, {todo}) => {
      const todos = state.todos;
      return {
        ...state,
        todos: todos.map(item => {
          if (item.id === todo.id) {
            return todo;
          }
          return item;
        })
      };
    }
  )
);
