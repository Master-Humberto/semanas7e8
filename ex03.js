//EX03
const idade = 21;
// inicializa idade como 21
if (idade >= 18 && idade < 60) {
// entra aqui
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}

// o código vê se a idade é maior ou igual a 18 e menos que 60
// caso não entre no primeiro caso ele vê se a idade é menor que 18
// caso nenhuma dos de cima passe ele entra no condicional de baixo.
