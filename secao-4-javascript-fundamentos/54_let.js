var numero = 1;
{
  let numero = 2;
  console.log("dentro = ", numero); // 2 (preferencia para dentro do escopo)
}
console.log("fora = ", numero); // 1
