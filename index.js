
function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}

function calcularMedia(n1, n2, n3, n4) {
  let soma = n1 + n2 + n3 + n4;
  return dividir(soma, 4);
}

function elevarPotencia(base, expo) {
  return Math.pow(base, expo);
}

function calcularAreaRetangulo(lado, altura) {
  return multiplicar(lado, altura);
}

function verificarParOuImpar(num) {
  if (num % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

function calcularRaizQuadrada(valor) {
  return Math.sqrt(valor);
}

function calcularHipotenusa(cateto1, cateto2) {
  let quadrado1 = elevarPotencia(cateto1, 2);
  let quadrado2 = elevarPotencia(cateto2, 2);
  let soma = somar(quadrado1, quadrado2);
  return calcularRaizQuadrada(soma);
}

module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
