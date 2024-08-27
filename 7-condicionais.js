console.log(`Trabalhando com condicionais`);

// new Array cria uma lista
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`); // push adiciona novo item à lista

const idadeComprador = 18;
const estaAcompanhada = true;

console.log(`Lista de destinos:`);
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idadade");
    listaDeDestinos.splice(1, 1); // Removendo item
}   else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); // Removedo item
} else {
    console.log("Não é maior de idade e não posso vender");
}
