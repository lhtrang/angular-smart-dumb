import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  private loadFromStorage(): Todo[] {
    const todos: Todo[] = localStorage.getItem('todos') && JSON.parse(localStorage.getItem('todos')) || [];
    return todos;
  }

  private persitData(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  fetchTodos(keyword?: string): Observable<Todo[]> {
    const todos: Todo[] = this.loadFromStorage();
    if (keyword) {
      return of(todos.filter(todo => todo.value.indexOf(keyword) > -1));
    }
    return of(todos);
  }

  addTodo(value: string): Observable<Todo> {
    const todos: Todo[] = this.loadFromStorage();
    const todo = {
      id: Date.now().toString(10),
      value
    };
    todos.push(todo);
    this.persitData(todos);
    return of(todo);
  }

  updateTodo(updatedTodo: Todo): Observable<void> {
    const todos: Todo[] = this.loadFromStorage();
    todos.some(todo => {
      if (todo.id === updatedTodo.id) {
        todo.value = updatedTodo.value;
        return true;
      }
      return false;
    });
    this.persitData(todos);
    return of();
  }

  deleteTodo(id: string): Observable<void> {
    const todos: Todo[] = this.loadFromStorage();
    this.persitData(todos.filter(todo => todo.id !== id));
    return of();
  }
}
