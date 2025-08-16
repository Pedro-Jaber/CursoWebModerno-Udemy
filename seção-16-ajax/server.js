const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./upload");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
  console.log("/upload");

  upload(req, res, (err) => {
    console.log("upload");
    console.log("err:", err);
    if (err) {
      return res.end("Ocorreu um erro.");
    }

    res.end("Concluído com sucesso.");
  });
});

app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 1,
  });
});

app.get("/parOuImpar", (req, res) => {
  // req.body
  // req.query
  // req.params

  const par = parseInt(req.query.numero) % 2 === 0;
  res.send({
    resultado: par ? "Par" : "Impar",
  });
});

app.listen(8080, () => console.log("Executando..."));
