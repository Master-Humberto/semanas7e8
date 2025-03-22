//EX04
var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];
// esse código ele vai pegando item por item do consumo dos dispositivos e subtrai com base 
// no consumo
// Dispositivo 1 : 
// 300 <= 1200 (true)
// 1200 - 300 = 900
// energia disponível é 900
// primeiro if
// Dispositivo 2 : 
// 600 <= 900 (true)
// 900 - 600 = 300
// energia disponível é 300
// primeiro if
// Dispositivo 3 : 
// 500 <= 300 (false) -> próximo if
// 500 <= 300 + 400 = 700 (true)
// bateria -= 500 (0)
// 700 - 500 = 200 (energia da bateria)
// segundo if
// Dispositivo 4 e 5 sem energia pq não entram nos outros condicionais
for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
}