function unafuncion() {
  console.log(1);
  return "hola";
}

var saludo = unafuncion();
console.log(saludo);

//---------------------

function suma(a, b) {
  return a + b;
}

let resultado = suma(5, 10);
console.log(resultado);
//--------------------------
function sumar(a, b) {
  return a + b;
}

let total = sumar(40, 50);
console.log(total);
//-------------------------

function calcularpromedio(num1, num2, num3) {
  let eltotal = (num1 + num2 + num3) / 3;
  return "el cambio es:" + eltotal;
}

console.log(calcularpromedio(20, 40, 60));

//------------FOREACH---------

let vocales = ["a, e, i, o, u"];

vocales.forEach(function (vocal) {
  console.log(vocal);
});
//------------------mostrar en pantalla
let numero = 0;
while (numero <= 10) {
  document.write(numero + "<br>");
  numero = numero + 1;
}
//----------------------
function pyramid(numPisos) {
  for (let i = 0; i < numPisos; i++) {
    let piso = "";
    for (let j = 0; j < i + 1; j++) {
      piso = piso + "*";
    }
    console.log(piso);
  }
}

pyramid(5);

//-------------mostrar en console.log

let list = 0;
while (list <= 5) {
  list = list + 1;

  console.log(list);
}

//--------------
function piramide(numpiso) {
  for (let i = 0; i < numpiso; i++) {
    let planta = "";
    for (let j = 0; j < i + 1; j++) {
      planta = planta + "*";
    }
    console.log(planta);
  }
}
piramide(5);
//-------------
let contar = 0;
for (i = 0; i <= 8; i++) {
  contar = contar + 1;
  console.log(contar);
}
//-----------------------

function Totales(n1, n2) {
  let totalsuma = n1 + n2;
  let totalresta = n1 - n2;
  let totalmultiplicacion = n1 * n2;
  return (
    "la suma es:" +
    totalsuma +
    "\n" +
    "la resta es:" +
    totalresta +
    "\n" +
    "la multiplicacion es:" +
    totalmultiplicacion
  );
}
console.log(Totales(5, 2));
//-------------------------------
var numeros = [1, 2, 3];
var suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

console.log(suma);
//!------------USANDO ARRAYS------------------------
var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;

for (var i = 0; i < length; i++) {
  numbers[i] *= 1;
}
console.log(numbers.join());

//!----------------------------------
const array = [1, 3, 3];
const nume = array.reduce((a, b) => a + b);
const multi = array.reduce((a, b) => a * b);
console.log("la suma es:", `${nume} \n la multi es: ${multi}`);

const multiplica = [2, 2];
const totalmulti = multiplica.reduce((a, b) => a * b);
console.log("el total es:", `${totalmulti}`);
//--------------------------------------------------
function arbol(narbol) {
  for (let i = 0; i < narbol; i++) {
    rarbol = "";
    for (let j = 0; j < i + 1; j++) {
      rarbol = rarbol + "*";
    }
    console.log(rarbol);
  }
}
arbol(5);
//-------------

const s = [1, 1];
const st = s.reduce((a, b) => a + b);
console.log("la suma es:", st);
//----------//!mostrar valores no repetidos  ----------------------
const Pruebap = [1,2,2,3,3,4,5]
const unico = [...new Set(Pruebap)];
console.log(unico);
//-----------filter----------
let lista = ["fabian","well","lili","izaro"];
let filtrado = lista.filter(nlista=>nlista.includes('a'));

console.log(filtrado)

//======slice(cortar array)====

let li =[1,2,3,4,5,6,7];
let nw=li.slice(1,4)
console.log(nw)

//=========mostrar elementos repetidos(filter)

let number = [1,2,2,3,4,4,5,6,6];
let nnumber = number.filter((item,index)=>{return number.indexOf(item)!==index;
})
console.log(nnumber)

//=========map(recorre array y modifica elementos)

let nwarray =[1,2,3,4,5];
let narray = nwarray.map(element=>element+10)
console.log(narray)

//=======indexOf(mostrar indice de elemento)

const ar =['fa','we','li','iza']
const result = ar.indexOf('li')
console.log(`${result}`)

//===========forEach,itera contenido de array, y muestra indice
const prue =[4,1,3,6,2,9]
const nprue = prue.forEach((element,i)=>{
  console.log(`${element}\, el indice es ${i}`)
})

//=========filter(pares, impares)
const numpar = [1,2,3,4,5,6,7]
const nueva = numpar.filter(x=>x % 2 ==0)
console.log(nueva)
//=========






