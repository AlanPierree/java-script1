console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // push adiciona novo item à lista

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";


console.log(`\nDestinos possíveis:`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe")
  } else {
    console.log("Destino não existe");
  }
  contador += 1;
}