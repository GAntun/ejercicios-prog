import Auto from './Auto.js';


let porsche = new Auto("1000kg", "2 asientos", 100, 30);

porsche.informarCaracteristicas();
porsche.acelerar();
porsche.informarVelocimetro();
porsche.frenar();
porsche.informarVelocimetro();



let lambo = new Auto("1000kg", "1 asiento", 300, 50)

lambo.informarCaracteristicas();
lambo.acelerar();
lambo.informarVelocimetro();
lambo.frenar();
lambo.informarVelocimetro();


porsche = new Auto ("500kg", "1 asiento", "999", "1");

porsche.informarCaracteristicas();