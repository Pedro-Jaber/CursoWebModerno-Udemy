const express = require("express");
const app = express();

const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/usuario");
const produtoApi = require("./api/produto");

// Middlewares
app.use(saudacao("Pedro"));
app.use(express.urlencoded({ extended: true })); // Interpreta entrada URL e transforma em objeto no req.body
app.use(express.json()); // Interpreta entrada JSON e transforma em objeto no req.body

// Routes
app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);
produtoApi(app, "Teste");

app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado`);
});

app.post("/corpo", (req, res) => {
  // let corpo = "";
  // req.on("data", function (data) {
  //   corpo += data;
  // });

  // req.on("end", function () {
  //   res.send(corpo);
  // });

  console.log("req.body: ", req.body);
  res.send(req.body);
});

app.get("/opa", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  //
  res.json({
    message: "Hello World!",
    date: new Date(),
    version: "1.0.0",
  });
  //
  // res.json([
  //   {
  //     message: "Hello World!",
  //     date: new Date(),
  //     version: "1.0.0",
  //   },
  //   {
  //     message: "Hello World!",
  //     date: new Date(),
  //     version: "2.0.0",
  //   },
  // ]);
});

app.use("/opa", (req, res) => {
  console.log("Opa");
});

app.listen(3000, () => {
  console.log("Iniciando servidor em http://localhost:3000");
});
