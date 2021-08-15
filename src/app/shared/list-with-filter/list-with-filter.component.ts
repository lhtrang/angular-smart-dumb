import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { ItemTemplateDirective } from '../item-template.directive';

/*
 * This is DUMB & STATELESS component
 */
@Component({
  selector: 'app-list-with-filter',
  templateUrl: './list-with-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListWithFilterComponent {
  @Input() header = '';
  @Input() list: any[] = [];
  @Input() search = '';
  @Output() searchInput = new EventEmitter<string>();

  @ContentChild(ItemTemplateDirective) template: ItemTemplateDirective = null;

  constructor() {
  }

  onSearchInput(event): void {
    const keyword: string = event.target.value;
    this.searchInput.emit(keyword);
  }

}
