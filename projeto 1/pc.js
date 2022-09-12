
const Computer = require ('./computer');  

class Pc extends Computer {  
    constructor(ram, hdd, cpu, type) {  
        super(ram, hdd, cpu, type);  
        
    }  
    toString() {  
        return JSON.stringify(this);  
    }  
}  
module.exports = Pc;