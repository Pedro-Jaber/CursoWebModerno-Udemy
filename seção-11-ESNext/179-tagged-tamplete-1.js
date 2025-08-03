// tagged templates - processa o template dentro de uma funcao
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra string";
}

const aluno = "gui";
const situacao = "aprovado";

console.log(tag`${aluno} esta ${situacao}.`);
