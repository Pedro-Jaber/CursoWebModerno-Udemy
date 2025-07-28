//* Atribuição por valor (acontece com tipos primitivos)

let c = 3;
let d = c;
d++;
console.log(c, d);

//* Atribuição por referência

const a = {
  // a recebe o endereço na memória do objeto
  name: "Teste",
};

const b = a; // b recebe o endereço que a está apontando
b.name = "Outro";
console.log(a); // { name: 'Outro' }
