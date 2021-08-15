import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/*
 * This is DUMB & STATELESS component
 */
@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTodoComponent implements OnInit {

  @Input() newTodo = '';
  @Output() addTodo = new EventEmitter<void>();
  @Output() newTodoInput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddTodo(): void {
    this.addTodo.emit();
  }

  onNewTodoInput(event): void {
    const newTodo: string = event.target.value;
    this.newTodoInput.emit(newTodo);
  }

}
