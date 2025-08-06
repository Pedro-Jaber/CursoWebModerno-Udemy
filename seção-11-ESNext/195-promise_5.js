function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro!");
    } else {
      resolve(valor);
    }
  });
}

//! Caso um erro seja invovado o valor 'v' n é mais passado adiante
funcionarOuNao("teste", 0.5)
  // .then((v) => consol.log(v))
  .then(
    (v) => console.log("Valor:", v)
    // (err) => console.log("Tratamento de erro no then:", err) //!
  )
  // .then((v) => console.log(v))
  .catch((e) => console.log("Error:", e)) //!
  .then(() => console.log("fim"));
