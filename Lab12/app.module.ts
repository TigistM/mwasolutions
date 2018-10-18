import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component.component';
import { MyvisibiltyDirective } from './myvisibilty.directive';
import { MynewcolorDirective } from './mynewcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    MyvisibiltyDirective,
    MynewcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
