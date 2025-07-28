const imprimitirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log("Quadro de Honra");
      break;
    case 8:
    case 7:
      console.log("Aprovado");
      break;
    case 6:
    case 5:
    case 4:
      console.log("Recuperação");
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Reprovado");
      break;
    default:
      console.log("Nota inválida");
  }
};

imprimitirResultado(10); // Quadro de Honra
imprimitirResultado(8.9); // Aprovado
imprimitirResultado(6.55); // Recuperação
imprimitirResultado(2.3); // Reprovado
imprimitirResultado(-1); // Nota inválida
imprimitirResultado(11); // Nota inválida
