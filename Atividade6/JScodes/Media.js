const nome = prompt("Insira seu nome: ");
let nota1,nota2,nota3,nota4;
nota1 = parseFloat(prompt("Insira sua primeira nota: "));
nota2 = parseFloat(prompt("Insira sua segunda nota: "));
nota3 = parseFloat(prompt("Insira sua terceira nota: "));
nota4 = parseFloat(prompt("Insira sua quarta nota: "));

let media = (nota1+nota2+nota3+nota4)/4
alert("sua média é: " + media);
