function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando promise...");
      resolve();
    }, tempo);
  });
}

// com then
// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

// com async/await
await esperarPor();
console.log("Executando promise 1...");

await esperarPor();
console.log("Executando promise 2...");

await esperarPor();
console.log("Executando promise 3...");

// ==============================================

// CommonJS
async function teste() {
  await esperarPor();
  console.log("Executei");
}

teste();

// ES
await esperarPor();
console.log("Executei");
