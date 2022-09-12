
const computerFactory = require("./computerFactory");

const Pc1 = new computerFactory(10, 227, 140, 'pc');      
const Server1 = new computerFactory(6, 144, 75,'server' );      
console.log(Pc1.toString());      
console.log(Server1.toString());