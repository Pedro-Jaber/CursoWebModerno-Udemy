const fs = require("fs");
const path = require("path");

function fileContent(caminho) {
  return new Promise((resolve, reject) => {
    fs.readFile(caminho, "utf-8", (err, conteudo) => {
      if (err) reject(err);
      resolve(conteudo.toString());
    });
  });
}

const caminho = path.join(__dirname, "dados.txt");

fileContent(caminho).then(console.log);
