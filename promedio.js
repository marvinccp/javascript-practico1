const numbers1 = [3, 5, 1, 9, 2, 1];
const numbers2 = [5, 32, 43, 58, 58, 58, 58, 67, 79, 81, 91, 100];

// const res = lis.reduce((acc, item)=>{
// return acc = acc + item
// }, 0)
// console.log(res);

// función promedio
function mediaAritmetica(array) {
  // const res = array.reduce((acum, item) => {
  //   return acum + item;
  // }, 0);

  const res = array.reduce((acum, item) => acum + item);

  pr = res / array.length;
  return pr.toFixed(1);
}
const promedio = mediaAritmetica(numbers1);
console.log(promedio);

//mediana

function mediana(list) {

  const dataOrder = list.sort((a, b) => a - b);
  let datos = dataOrder.length;
  let mitadLista = (datos + 1) / 2;

  if (datos % 2 == 0) {
    let medianaPar = parseInt(mitadLista);
    let dato1 = dataOrder[medianaPar];
    let dato2 = dataOrder[medianaPar] - 1;
    let medianaTotal = mediaAritmetica([dato1, dato2]);
  } else {
    let medianaimPar = mitadLista;
  }
}

mediana(numbers1);

//moda
const moda = (lista) => {
  const lista1 = {};

  lista.map((elemento) => {
    if (lista1[elemento]) {
      lista1[elemento] += 1;
    } else {
      lista1[elemento] = 1;
    }
  });

  const listArray = Object.entries(lista1);
  listArray.sort((a, b) => a[1] - b[1]);

  const moda = listArray[listArray.length - 1];
  console.log(moda);
};

moda(numbers2);

///////////////

const numbers3 = [
  9, 5, 1, 9, 9, 2, 3, 2, 2, 2, 2, 2, 2, 2, 1, 8, 1, 1, 9, 5, 9, 0,
];

function calcModa(list) {
  return list.reduce(
    (acum, el, _i, list) => {
      const count = list.filter((e) => e == el).length;
      //return count > acum[1] ? [el, count] : acum;
      if (count > acum[1]) {
        return [el, count];
      } else {
        return acum;
      }
    },
    ["", 0]
  );
}
console.log(calcModa(numbers3));
// const cont = document.getElementById("par");
// cont.textContent = `La moda corresponde al número ${calcModa(numbers3)[0]}, que
// se repite ${calcModa(numbers3)[1]} veces, el total de datos es de  ${numbers3.length}`;
// console.log(calcModa(numbers3));

// const añosEvaluados = [3, 18, 25];

// let data = [];

// const mediaGeometrica = (datos) => {
//   for (const a of datos) {
//     const indicadores = new Number(a) / 100 + 1;
//     data.push(indicadores);
//     console.log(indicadores);
//   }

//   const dataBase = data.reduce((a, b) => a * b).toFixed(4);
//   console.log(dataBase);

//   // crecimiento anual promedio de las ventas es raiz.toFixed(2)
//   const raiz =
//     (Math.pow(dataBase, 1 / añosEvaluados.length).toFixed(4) - 1) * 100;
//   console.log(raiz.toFixed(2));

//   //Las ventas del negocio a partir del valor donde comenzó la medición
//   //han aumentado un multipl.toFixed(2)
//   const producto = (data.reduce((a, b) => a * b) - 1) * 100;
//   console.log(producto.toFixed(2));
// };

// mediaGeometrica(añosEvaluados);

//Media Geométrica
// en finanzas se usa para establecer tasas de crecimiento mensual o anual, de hecho
//es la formula que se usa para calcular el PIB. para lograrlo, los datos deben procesarse
// y usarse como decimales para establecer Indicadores, los que se usaran en la fórmula
//principal que es sencilla.

//Supongamos que el crecimiento en las ventas de una
//empresa X en los tres ultimos años es de 20%, 11%, 15%

// el primer paso es agrupar los datos en un array y luego convertirlos
//a enteros
const numero = ["20%", "11%", "15%"];
const añosEvaluados = numero.map((n) => parseInt(n));

//en el array añosEvaluados están los datos que serán pasados por
//parametro en la función mediaGeometrica

const mediaGeometrica = (datos) => {
  //los datos son convertidos en indicadores a través de una ecuación sencilla
  const data = datos.map((d) => Number(d) / 100 + 1);

  //este es el producto o multiplicación de los indicadores
  const dataBase = data.reduce((a, b) => a * b).toFixed(4);

  // crecimiento anual promedio de las ventas o media Geométrica
  const mediaGeometrica =
    (Math.pow(dataBase, 1 / añosEvaluados.length).toFixed(4) - 1) * 100;
  console.log(mediaGeometrica.toFixed(2));
};

//La diferencia con la  media aritmética, es que la geométrica tiene en cuenta
//los cambios porcentuales, por lo general está por debajo de la aritmética y
//es la forma indicada para establecer este dato cuando se habla de crecimiento o
//tasas de interes

mediaGeometrica(añosEvaluados);
