function funcao0(a, b, c) {
    return Math.max(a, b, c);
}

function funcao1(a, b, c) {
    nome = [a, b, c]
    nome.sort(function (a, b) { return a - b });
    return nome;
}

function funcao2(palavra) {
    return palavra === palavra.split('').reverse().join('') ? true : false;
}

function funcao3(a, b, c) {
    if (a + b > c) {
        if (a + c > b) {
            if (b + c > a) {
                alert("triângulo")
            } else { alert("não é triângulo"); }
        } else { alert("não é triângulo"); }
    } else {
        alert("não é triângulo");
    }

    if (a == b && a != c) {
        alert("isósceles");
    } else if (a == c && a != b) {
        alert("isósceles");
    } else if (b == c && b != a) {
        alert("isósceles");
    } else if (a == b && b == c) {
        alert("equilátero");
    } else if (a != b && b != c) {
        alert("escaleno");
    }
}