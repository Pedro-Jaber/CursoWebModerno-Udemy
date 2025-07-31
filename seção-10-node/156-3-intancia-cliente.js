const contadorA = require("./156-1-instancia-unica");
const contadorB = require("./156-1-instancia-unica");

const contadorC = require("./156-2-instancia-nova")();
const contadorD = require("./156-2-instancia-nova")();

contadorA.inc();
contadorA.inc();
console.log("contadorA:", contadorA.valor);
console.log("contadorB:", contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log("contadorC:", contadorC.valor);
console.log("contadorD:", contadorD.valor);
