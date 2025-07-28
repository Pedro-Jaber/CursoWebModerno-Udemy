const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // Código ASCII
console.log(escola.indexOf("d"));

console.log(escola.substring(1)); // od3r
console.log(escola.substring(0, 3)); // (0 3( = Cod

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace(3, "e"));
console.log(escola.replace(/\d/g, "e"));
console.log(escola.replace(/\w/g, "e"));

console.log("Ana,Maria,Pedro".split(","));
console.log("Ana,Maria,Pedro".split(/,/)); // Regex
