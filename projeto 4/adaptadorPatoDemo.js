
// Aplicando na prática os objetos e interfaces utilizadas 

const Pato = require('./pato');

var pato = new Pato();
som = pato.quaqua();
situacao = pato.voar();
console.log(som);
console.log(situacao);

const AdaptadorPato = require('./adaptadorPato');

var pato2 = new AdaptadorPato();
som = pato2.cocorico();
situacao = pato2.voar();
console.log(som);
console.log(situacao);