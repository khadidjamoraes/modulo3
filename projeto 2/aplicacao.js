
const Triciclo = require("./triciclo");
const Carro = require("./carro");

let modelos =[
  triciclo1 = Object.create(new Triciclo('Can-Am Spyder','BRP','amarelo',3,0)),
  triciclo2 = Object.create(new Triciclo('G4','Honda fit','azul',3,0)),
  triciclo3 = Object.create(new Triciclo('PCX 150','Honda','cinza',3,0)),
  carro1 = Object.create(new Carro('Spin','Chevrolet','bege',4,4)),
  carro2 = Object.create(new Carro('Onix', 'Chevrolet','branco',4,4)),
  carro3 = Object.create(new Carro('HB20','Hyundai','branco',4,4))
  ]

  let impressao = Object.create(modelos)

  function represent(vetor){

    vetor.forEach((elemento) => {
      console.log("Marca: "+elemento.modelo+ ", modelo: "+elemento.marca+", cor:"+elemento.cor+", número de rodas:"
      +elemento.numeroRodas+",número de portas:"+elemento.numeroPortas);
    })

}  

represent(modelos)
represent(impressao)