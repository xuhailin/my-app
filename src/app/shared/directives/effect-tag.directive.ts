import { Directive, ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[effectTag]',
})
export class EffectTagDirective {
  @Input() public component: any;
  constructor(
    private _resolver: ComponentFactoryResolver,
    private _container: ViewContainerRef) { }
  public ngOnInit(): void {
    if (this.component) {
      const factory = this._resolver.resolveComponentFactory<any>(this.component);
      this._container.createComponent(factory);
    }
  }
}
