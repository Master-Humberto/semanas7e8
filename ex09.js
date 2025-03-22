let tempoMaximo = 20;// 20 segundos
let velocidadeSegura = 5; 
let velocidadeInicial = 30;
let desaceleracao = 3;
let velocidade = velocidadeInicial;
let tempo = 0;
while (velocidade <= velocidadeSegura && tempo <= tempoMaximo){
    velocidade -= desaceleracao;
    tempo += 1;
}

if (velocidade > velocidadeSegura){
    console.log("Deu ruim !");
} else { 
    console.log("Deu bom ! Vocë pousou no tempo : " + tempo);
}
