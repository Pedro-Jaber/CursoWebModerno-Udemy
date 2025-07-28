let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);
console.log(!isAtivo);

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("para finalizar...");
console.log(!!("" || null || 0 || " ")); // true => 0 = false, "" = false, null = false, " " = true
console.log(!!("" && null && 0 && " ")); // false => 0 = false, "" = false, null = false, " " = true

let nome = "";
console.log(nome || "Desconhecido");
