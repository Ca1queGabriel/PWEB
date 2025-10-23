let altura = prompt("insere a altura aí");
let peso = prompt("insere o peso aí");
calculaIMC(altura, peso);

function calculaIMC(altura, peso) {
    let imc = peso / Math.pow(altura, 2);

    if (imc < 18.5) {
        alert("você é magro e tá na obesidade grau 0");
    } else if (imc > 18.5 && imc < 24.9) {
        alert("você é normal e teu grau de obesidade tá 0");
    } else if (imc > 25 && imc < 29.9) {
        alert("você está no sobrepeso e seu grau de obesidade é 1");
    } else if (imc > 30 && imc < 39.9) {
        alert("você é obeso e seu grau de obesidade está em 2");
    } else {
        alert("você está em obesidade grave e seu grau de obesidade é 3");
    }

}