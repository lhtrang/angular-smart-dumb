import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from './todo-item';

/*
 * This is DUMB & STATELESS component
 */
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() deleteTodo = new EventEmitter<string>();
  @Output() enableEditMode = new EventEmitter<string>();
  @Output() cancelEdit = new EventEmitter<string>();
  @Output() draftInput = new EventEmitter<TodoItem>();
  @Output() saveTodo = new EventEmitter<TodoItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteTodo(todoId: string): void {
    this.deleteTodo.emit(todoId);
  }

  onEditTodo(todoId: string): void {
    this.enableEditMode.emit(todoId);
  }

  onCancelEdit(todoId: string): void {
    this.cancelEdit.emit(todoId);
  }

  onDraftInput(event, item: TodoItem): void {
    const draftTodo: string = event.target.value;
    this.draftInput.emit({
      ...item,
      draft: draftTodo
    });
  }

  onSave(item: TodoItem): void {
    this.saveTodo.emit(item);
  }

}
