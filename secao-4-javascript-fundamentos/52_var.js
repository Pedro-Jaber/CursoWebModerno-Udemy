{
  {
    {
      {
        sera = "Sera?";
      }
    }
  }
}
console.log(sera);

function teste() {
  var local = 123;
  console.log(local);
}

teste();
// console.log(local); // Error

var numero = 1;
{
  var numero = 2;
  console.log("dentro = ", numero);
}
console.log("fora = ", numero);
