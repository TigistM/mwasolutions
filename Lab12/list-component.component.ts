import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listcomp',
  template: `
    <p>List of names : <p>
      <ul>
          <li *ngFor = "let name of names">Name : {{name}}</li>
      </ul>
    
  `,
  styles: []
})
export class ListComponentComponent implements OnInit {
  public names:String[] = ['Bereket','Lisa','smith','Luke'];
  constructor() { }

  ngOnInit() {
  }

}
