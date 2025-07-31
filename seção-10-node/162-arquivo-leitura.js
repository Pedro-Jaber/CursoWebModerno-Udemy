const fs = require("fs");

const caminho = __dirname + "/162-arquivo.json";

// sincrono... (ruim)
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

//assincrono...
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  if (err) {
    console.log("Não foi possível carregar o arquivo");
    return;
  }

  // conteudo == String
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

// para JSON é mais facil
const config = require("./162-arquivo.json");
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
  console.log("Conteúdo da pasta...");
  console.log(arquivos);
});
