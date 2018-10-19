import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
    {
      _id: 1,
      game: {
        name: 'Rowing',
        schedule: [
          {stadium: 'Bahir Dar', date: '1/2/1998', time: '2:00'}
        ]
      }
    },
    {
      _id: 2,
      game: {
        name: 'Bowling',
        schedule: [
          {stadium: 'Addis Ababa', date: '1/2/2018', time: '9:00'}
        ]
      }
    }
  ];
  constructor() { }

  getData(){
    return this.data;
  }
  getSchedule(id: number){
    for(let g of this.data){
      if(g._id == id) {
        return g.game.schedule;
      }
    }
    return {};
  }
  isValidId(id: number): boolean{
    for(let g of this.data){
      if(g._id == id) {
        return true;
      }
    }
    return false;
  }
}

  