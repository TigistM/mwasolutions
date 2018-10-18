import { Directive, Input, HostBinding, HostListener,EventEmitter } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';


@Directive({
  selector: '[newcolor]',
  outputs:['colorEmitter']
})
export class MynewcolorDirective {
  @Input('color') newcolor;
  @HostBinding('style.color') myColor;
  public colorEmitter:EventEmitter<String>;

  constructor() {
    this.colorEmitter = new EventEmitter();
   }



  @HostListener('click') changeColor(){this.myColor=this.newcolor;this.colorEmitter.emit(this.newcolor);}

}

