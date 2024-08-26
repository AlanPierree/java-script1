console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// new Array cria uma lista
const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // push adiciona novo item à lista

console.log(`Lista de destinos:`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // splice retira item da lista (posição, quantidade)
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);