console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`); // push adiciona novo item à lista

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade/acompanhado");
    listaDeDestinos.splice(1, 1); // Removendo item
}   else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); // Removedo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log(`Embarque: \n\n`)

if(idadeComprador >= 18 && temPassagemComprada) {
  console.log(`Boa viagem!`)
} else{
  console.log(`Você não pode embarcar.`)
}
