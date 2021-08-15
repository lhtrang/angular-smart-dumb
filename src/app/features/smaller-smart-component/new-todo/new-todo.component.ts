import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectNewTodo } from '../../../state/todo.selectors';
import { addNewTodo, newTodoInput } from '../../../state/todo.actions';

/*
 * This is SMART & STATEFUL component
 */
@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {
  newTodo$ = this.store.select(selectNewTodo);

  constructor(
    private store: Store,
  ) {
  }

  onNewTodoInput(event): void {
    const newTodo: string = event.target.value;
    this.store.dispatch(newTodoInput(
      {value: newTodo}
    ));
  }

  onAddTodo(): void {
    this.store.dispatch(addNewTodo());
  }
}
