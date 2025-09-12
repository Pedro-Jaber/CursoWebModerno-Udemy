function salvar(req, res) {
  console.log("Salvando o usuário...");
  res.send("Usuário salvo com sucesso!");
}

function obter(req, res) {
  console.log("Obtendo o usuário...");
  res.send("Usuário obtido com sucesso!");
}

module.exports = { salvar, obter };
