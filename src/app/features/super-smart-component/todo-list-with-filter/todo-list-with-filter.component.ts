import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../../shared/todo-item/todo-item';

/*
 * This is DUMB & STATELESS component
 */
@Component({
  selector: 'app-todo-list-with-filter',
  templateUrl: './todo-list-with-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListWithFilterComponent {

  @Input() todoList: TodoItem[] = [];
  @Input() search = '';
  @Output() searchInput = new EventEmitter<string>();
  @Output() enableEditMode = new EventEmitter<string>();
  @Output() deleteTodo = new EventEmitter<string>();
  @Output() cancelEdit = new EventEmitter<string>();
  @Output() draftInput = new EventEmitter<TodoItem>();
  @Output() saveTodo = new EventEmitter<TodoItem>();

  constructor() {
  }

  onSearchChange(event): void {
    const keyword: string = event.target.value;
    this.searchInput.emit(keyword);
  }

}
