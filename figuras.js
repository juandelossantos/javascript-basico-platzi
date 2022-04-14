// Código Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`El lado del cuadrado es: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`el perímetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`el área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd("cuadrado");

// Código triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
  `los lados del tríangulo son: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`el perímetro del triángulo es: ${perimetroTriangulo}cm`);

const alturaTriangulo = Math.sqrt(
  ladoTriangulo1 * ladoTriangulo1 - baseTriangulo * baseTriangulo
);
console.log(`la altura del triángulo es: ${alturaTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`el área del triángulo es: ${areaTriangulo}cm^2`);

console.groupEnd("triangulo");

// Código circulo
console.group("Círculo");
const radioCirculo = 4;
console.log(`el radio del circulo es: ${radioCirculo}cm`);

const perimetroCirculo = 2 * radioCirculo * Math.PI;
console.log(`el perímetro del circulo es: ${perimetroCirculo}cm`);

const areaCirculo = radioCirculo * radioCirculo * Math.PI;
console.log(`el área del circulo es: ${areaCirculo}cm^2`);
console.groupEnd("Círculo");
