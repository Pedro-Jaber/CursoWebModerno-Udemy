console.log("Array:", typeof Array); // function
console.log("new Array:", typeof new Array()); // object
console.log("[]:", typeof []); // object

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined
