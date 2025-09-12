function saudacao(nome) {
  // Executa apenas uma vez
  console.log("Iniciando o middleware de Saudação");

  return function (req, res, next) {
    // Executa em toda requisição
    console.log(`seja bem vindo, ${nome}!`);
    next();
  };
}

module.exports = saudacao;
