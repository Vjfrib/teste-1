
do {
  var cpf = prompt("Digite seu CPF");} while (cpf.length !== 11 || isNaN(cpf));

var numeros = cpf.split("").map(Number);

numeros = check(9, numeros);
alert("CPF agora ficou: " + numeros + "\n\n"); 
numeros = check(10, numeros);
alert("CPF agora ficou: " + numeros + "\n\n");


var original = cpf.split("").map(Number);

if (original.toString() === numeros.toString()) {
  alert("Válido");
} else {
  alert("Inválido");
  alert("original: " + original)

}


function check(range, cpfArray) {
  
  var backup = cpfArray.slice();
  
  for (let i = 0; i < range; i++){
    cpfArray[i] *= i + 1;
  }

  var somatorio = 0;
  for (let i = 0; i < range; i++) {
    somatorio += cpfArray[i];
  }

  var digito = somatorio % 11;

  if (digito === 10) {
    digito = 0;
  }

  
  digito = parseInt(digito);
  alert("primeiro digito: " + digito);

  
backup[range] = digito;
  return backup;
}
