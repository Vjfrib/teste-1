//import { check } from './function.js';
//não pegou no replit
// Laço de validação dos números
do {
  var cpf = prompt("Digite seu CPF");
  // len(cpf) função que retorna. cpf.len método para variáveis & ( = ) -> recebe. ( == ) -> igual
} while (cpf.length !== 11 || isNaN(cpf));

/* Fazer um array receber a var para podermos iterar e trabalhar */
// Divide a string e transforma em números
var numeros = cpf.split("").map(Number);

// Chamada da função check para cálculo dos dígitos verificadores
check(9, numeros);
alert("cpf agr ficou: " + numeros + "\n\n")
check(10, numeros);
alert("cpf agr ficou: " + numeros + "\n\n")


var original = cpf.split("").map(Number);

// Faz o casting, sempre é a tal da igualdade igual (igualdade restrita)
if (original.toString() === numeros.toString()) {
  alert("Válido");
} else {
  alert("Inválido");
  alert("original: " + original)

}

//export check tbm n
function check(range, cpfArray) {
  // Atribui a multiplicação
  var backup = cpfArray.slice(); // Faz uma cópia do array original
  for (let i = 0; i < range; i++) {
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

  // Digito recebe ele como integer
  digito = parseInt(digito);
  alert("primeiro digito: " + digito);

  // Faz o envio
  backup[range] = digito;
  cpfArray = backup // Faz uma cópia do array original
  alert(cpfArray);
  return cpfArray;
}
