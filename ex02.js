// Versão 1 da função de análise de crédito
function analisarCredito1() {
    // inicializa as compras
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    // limite é 5000
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;
    // i = 1 aqui. como é do-while ele checa a condição após passar pelo código
    // se o limite >= totalCompras e i < compras.length ele para 
    do {
        totalCompras += compras[i];
        i++;
    } while (limite >= totalCompras && i < compras.length);
    // 2500 + 1200 = 3700 (true) && i[2] < 4
    // 3700 + 800 = 4500 (true) && i[3] < 4
    // 4500 + 100 = 4600 (true) && i[4] < 4
    // quebra
    saldoDisponivel = limite - totalCompras;
    // 5000 - 4600 = 400 < 0 (false)
    if (saldoDisponivel < 0) {
        // ok
        status = 'negado';
    }
    // +400 seu crédito foi aprovado
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
// Versão 2 da função de análise de crédito
function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    // cria a lista
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;
    // ele cria o while e checa o condicional antes de entrar no loop
    while (limite >= totalCompras && i < compras.length) {
        totalCompras += compras[i];
        i++;
    }
    // 2500 + 1200 = 3700 (i=1) -> i = 2
    // 3700 + 800 = 4500 (i=2) -> i = 3
    // 4500 + 100 = 4600 (i=3) -> i = 4
    // 4 < 4 (false) para o loop
    saldoDisponivel = limite - totalCompras;
    // saldoDisponivel = 5000 - 4600 = 400
    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    // aprovado crédito 400
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
