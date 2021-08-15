import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNewTodo, newTodoInput } from '../../../state/todo.actions';
import { selectNewTodo } from '../../../state/todo.selectors';

/*
 * This is SMART & STATEFUL component
 */
@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
