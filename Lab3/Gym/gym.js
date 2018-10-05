var EventEmitter = require('events');

class Gym extends EventEmitter
{
   constructor()
    {
        super();
       this.message = 'Athlete is working out';
    }
    visit()
    {

        //console.log(this.message);
       
        setInterval(() => {
            this.emit('go','Athlete is working out');
      }, 1000);
        
    }
}

var gym = new Gym();
gym.on('go',(msg)=>console.log(msg));
//setInterval(() => {
    gym.visit();
//}, 1000);
