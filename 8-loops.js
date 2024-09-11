console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";


console.log(`\nDestinos possíveis:\n`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false

while (contador < 3) {

  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe")
    destinoExiste = true;
    break;
  }

  contador += 1;
}

console.log(`Destino existe: `, destinoExiste)

if(podeComprar && destinoExiste){
  console.log("Boa Viagem!")
} else{
  console.log("Ocorreu um erro.")
}

for (let cont = 0;contador < 3;cont++) { // "++" simboliza "+= 1"

  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe")
    destinoExiste = true;
  }
}