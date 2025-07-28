// Var no Loop
console.log("var");
for (var x = 0; x < 10; x++) {
  console.log(x);
}
console.log("i = ", x);

// Let no Loop
console.log("let");
for (let j = 0; j < 10; j++) {
  console.log(j);
}
// console.log("j = ", j); // Error: j is not defined

// Funções no Loop com var
console.log("funcoes");
const funcs = [];

for (var x = 0; x < 10; x++) {
  funcs.push(function () {
    console.log(x);
  });
}
funcs[2]();
funcs[8]();

// Funções no Loop com let
console.log("funcoes");
const funcs2 = [];

for (let y = 0; y < 10; y++) {
  funcs2.push(function () {
    console.log(y);
  });
}
funcs2[2]();
funcs2[8]();
funcs2[10]();
