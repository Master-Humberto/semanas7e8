
total = 120;

if (total < 50){
    console.log(`Pedidos abaixo de R$50,00 → "Frete não disponível!"`);
} else if (total <= 199.99){
    console.log(`Pedidos entre R$50,00 e R$199,99 (inclusive) → "Frete com custo adicional!"`);
} else {
    console.log(`Pedidos de R$200,00 ou mais → "Frete grátis!"`);
}