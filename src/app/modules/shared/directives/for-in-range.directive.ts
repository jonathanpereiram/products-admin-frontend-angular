import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[forInRange]'
})
export class ForInRangeDirective {

  @Input() set forInRange(value: number) {
    for (let index = 0; index < value; index++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, new ForInRangeContext(index));
    }
  }

  constructor(
    private templateRef: TemplateRef<ForInRangeContext>,
    private viewContainerRef: ViewContainerRef
  ) {}

}

class ForInRangeContext {
  constructor(private index: number) { }
}