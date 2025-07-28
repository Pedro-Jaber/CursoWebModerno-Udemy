let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

dobro = (a) => 2 * a; // forma reduzida | return implicito
console.log(dobro(Math.PI));

let ola = function () {
  return "Ola!";
};
ola = () => "Ola!"; // forma reduzida | return implicito

console.log(ola());
