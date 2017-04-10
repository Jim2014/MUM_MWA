var EventEmitter = require('events');

class Ticker extends EventEmitter{
    constructor(onFunc){
        super(); 
        var self=this; 
        const EventType='tick';                
        self.on(EventType,onFunc);      
        setInterval(function(){
            self.emit(EventType,'TICK');
        },1000);
    }
}

var ticker=new Ticker(msg=>console.log(msg));
