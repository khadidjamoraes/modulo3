
// Criando o adicional de queijo mussarela ralado

const SanduicheFrango = require('./sanduicheFrango');

class QueijoMussarelaRalado extends SanduicheFrango {  
    constructor (price) {  
        super(price)
        let novoObjeto = Object.create(new SanduicheFrango());
        this.price = () => novoObjeto.price() + 2.00;
        console.log("Sanduíche com adicional de queijo mussarela ralado custa R$ 6,50");
        return novoObjeto
    }  
}  

module.exports = QueijoMussarelaRalado; 