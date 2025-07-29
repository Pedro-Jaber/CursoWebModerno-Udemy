const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "Geladeira", preco: 1200, fragil: false },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de vidro", preco: 12.49, fragil: true },
  { nome: "Copo de plastico", preco: 18.99, fragil: false },
];

//Meu
console.log(produtos.filter((p) => p.fragil && p.preco > 500));

//Aula
const caro = (p) => p.preco >= 500;
const fragil = (p) => p.fragil;

console.log(produtos.filter(caro).filter(fragil));
