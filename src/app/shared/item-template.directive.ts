import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appItemTemplate]'
})
export class ItemTemplateDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
