/*
v e v = v
v e f = f
f e v = f
f e f = f

v ou v = v
v ou f = v
f ou v = v
f ou f = f

v xor v = f
v xor f = v
f xor v = v
f xor f = f

!v = f
!f = v
*/

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; // v ou v = v
  const comprarTv50 = trabalho1 && trabalho2; // v e v = v
  // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2; // xor
  const manterSaudavel = !comprarSorvete; // !v = f operador unário

  return {
    comprarSorvete,
    comprarTv50,
    comprarTv32,
    manterSaudavel,
  };
}

console.log("1:", compras(true, true));
console.log("2:", compras(true, false));
console.log("3:", compras(false, true));
console.log("4:", compras(false, false));
