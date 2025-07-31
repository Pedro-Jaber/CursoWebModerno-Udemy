const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
  const funcionarios = response.data;
  // console.log(funcionarios);

  const mulheres = (f) => f.genero === "F";
  const chines = (f) => f.pais === "China";
  const maior_salario = (f_menor_salario, f_atual) => {
    return f_menor_salario.salario > f_atual.salario
      ? f_atual
      : f_menor_salario;
  };

  const m_c_maior_salario = funcionarios
    .filter(mulheres)
    .filter(chines)
    .reduce(maior_salario);

  console.log("m_c_maior_salario:", m_c_maior_salario);
});
