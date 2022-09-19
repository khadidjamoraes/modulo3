
// Criando o adaptador Pato

const Pato = require('./pato');
const Galinha = require('./galinha');

class AdaptadorPato extends Galinha {  
    constructor (cocorico, voar) {
        super (cocorico, voar)
        let pato = new Pato();
        this.cocorico = () => "Cocoricó";
        this.voar = pato.voar;
        return this
    }  
}

module.exports = AdaptadorPato;
