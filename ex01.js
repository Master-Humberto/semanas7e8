//EX01
// inicializa as variáveis
let p = 10;
let q = 3;
let r = 6;
// como não há parenêsis é tudo sequencial. 
// (p % q === 1) -> (10 % 3 === 1) [true]
// (r * 2 > p) -> (6 * 2 > 10) [true]
// (q + r < p) -> (3 + 6 < 10) [true]
// true and true -> true. true or true -> true
let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
console.log(resultado);
// cria a lista de valores
const valores = [3, 6, 9, 12, 15];

let produto = 1;
//para cada valor se pega e multiplica ao valor anterior. no caso 3x6x9x12x15
for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}
// imprime o valor
console.log("O produto dos valores é:", produto);

