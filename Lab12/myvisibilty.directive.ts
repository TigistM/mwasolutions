import { Directive,ElementRef,Renderer2,HostBinding,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appMyvisibilty]'
})
export class MyvisibiltyDirective {

  constructor(private e: ElementRef, private r: Renderer2) {
    // e.nativeElement.style.fontSize = '22px'
    r.setStyle(e.nativeElement, 'font-size', '34px');
    
     
  }

  // Set a property in the class from outside
  @HostBinding('style.display') myHidden;
  @Input('hide') defaultHide=false;
  
  // To Listen to Events that are triggered by client
   @HostListener('mouseenter') enter() { this.e.nativeElement.style.color = 'red'; this.myBackGround = 'yellow' }
   @HostListener('mouseleave') leave() { this.e.nativeElement.style.color = 'black'; this.myBackGround = 'white' }
   @HostBinding('style.backgroundColor') myBackGround;

  ngOnInit() { // reached after all bound properties are initilized
    
    console.log(this.defaultHide);
    if(this.defaultHide) this.myHidden='none';
    
    
  }

}
