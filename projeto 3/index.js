
// Criando os sanduíches 

const SanduicheFrango = require('./sanduicheFrango');
const Pepperoni = require('./pepperoni');
const QueijoMussarelaRalado = require('./queijoMussarelaRalado');

var sanduicheFrango = new SanduicheFrango();
var sanduicheFrangoQueijoMussarelaRalado = new QueijoMussarelaRalado(sanduicheFrango);
var sanduicheFrangoQueijoMussarelaRaladoPepperoni = new Pepperoni(sanduicheFrangoQueijoMussarelaRalado);

