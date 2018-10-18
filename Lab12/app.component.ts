import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<listcomp></listcomp>
            <div appMyvisibilty hide="false">
              <p> Hello world</p>
            </div>
            
            <div newcolor color="red" (colorEmitter)="changedColor($event)">
                this is where the color going to CHANGE!.
            </div>
            <p>{{elementColor}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public elementColor;

  changedColor(color){
    console.log(color);
    this.elementColor="An element changed its color to: "+color;
  }
}
