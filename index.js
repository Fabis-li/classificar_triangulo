const ladoA = 5;
const ladoB = 10;
const ladoC = 10;

const validarSomaDeDoisLados = (ladoA, ladoB, ladoC) => {
    if (ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA) {
        return false;
    }
    return true;
};

const validarMedidas = (ladoA, ladoB, ladoC) => {
    if (typeof ladoA !== "number" || typeof ladoB !== "number" || typeof ladoC !== "number") {
        return false;
    }
    if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
        return false;
    }
    return true;
};

const ehTriangulo = (ladoA, ladoB, ladoC) => {
    if (validarSomaDeDoisLados(ladoA, ladoB, ladoC) && validarMedidas(ladoA, ladoB, ladoC)) {
        return true;
    }
    return false;
};

const ehEquilatero = (ladoA, ladoB, ladoC) => {
    if (ladoA === ladoB && ladoB === ladoC) {
        return true;
    }
    return false;
};

const ehIsosceles = (ladoA, ladoB, ladoC) => {
    if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return true;
    }
    return false;
}

const ehEscaleno = (ladoA, ladoB, ladoC) => {
    if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return true;
    }
    return false;
}

const tipoTriangulo = (ladoA, ladoB, ladoC) => {

    if (!ehTriangulo(ladoA, ladoB, ladoC)) {
        return "Não é um triângulo";
    }
    if (ehEquilatero(ladoA, ladoB, ladoC)) {
        return "Triângulo Equilátero";
    }
    if (ehIsosceles(ladoA, ladoB, ladoC)) {
        return "Triângulo Isósceles";
    }
    if (ehEscaleno(ladoA, ladoB, ladoC)) {
        return "Triângulo Escaleno";
    }
}

console.log(tipoTriangulo(ladoA, ladoB, ladoC));

// if(ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA) {
//     console.log("A soma de dois lados não pode ser menor que o terceiro lado");
// } else if (ladoA < 0|| ladoB < 0 || ladoC < 0) {
//     console.log("O Triangulo é inválido");
// } else if (ladoA === ladoB && ladoB === ladoC) {
//     console.log("Equilátero");
// } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
//     console.log("Isósceles");
// } else {
//     console.log("Escaleno");
// }
