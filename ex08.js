class Veiculo {
    constructor(modelo, ano){
        this.modelo = modelo;
        this.ano = ano;
    }
    CalcularConsumo(){}
}

class Carro extends Veiculo{
    constructor(modelo, ano, quilometragem, eficiencia){
        super(modelo, ano);
        this.quilometragem = quilometragem; // km
        this.eficiencia = eficiencia; // km / l
    }

    CalcularConsumo(){
        let combustivel = this.quilometragem / this.eficiencia;
        // ex 10 quilometros a 2 km / l sobram 5 litros de combustível
        console.log("Você gastou" + combustivel + "litros de gasolina");
    }
}

class Moto extends Veiculo{
    constructor(modelo, ano, quilometragem, eficiencia){
        super(modelo, ano);
        this.quilometragem = quilometragem;
        this.eficiencia = eficiencia;
    }

    CalcularConsumo(){
        
        let combustivel = this.quilometragem / this.eficiencia * (1.5 / (2026 - this.ano)); // conta um ano depois para não haver divisão por zero
        // a cada ano que pra trás o carro fica pior no consumo
        console.log("Você gastou" + combustivel + "litros de gasolina");
    }
}