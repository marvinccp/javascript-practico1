//helpers
const salariosCol = colombia.map((persona) => persona.salary);
const salariosColSorted = salariosCol.sort(
  (salaryA, salaryB) => salaryA - salaryB
);
const esPar = (lista) => lista % 2 === 0;

const mediaAritmetica = (lista) => {
  const res = lista.reduce((acum, item) => acum + item);
  promedio = res / lista.length;
  return promedio;
};

// Calculadora de mediana

//Mediana de salarios
const medianaDeSalarios = (lista) => {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {

    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];
    const mediana = mediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;

  } else {

    const personitaMitad = lista[mitad];
    return personitaMitad;
  
};

const medianaGeneraslCol = medianaDeSalarios(salariosColSorted);

//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaDeSalarios(salariosColTop10);
console.log(medianaTop10);

console.log(medianaGeneraslCol, medianaTop10);
